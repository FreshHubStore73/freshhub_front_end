'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { basePages } from '@/data/pages';
import { getCategories, getDishById } from '@/utils/getData';

export default function BreadCrumbs() {

    const pathnames = usePathname();

    const params: {
        category: string;
        dishId: string[]; // т.к. ссылка на страницу с конкретным блюдом имеет вид  /122231/название_блюда
    } = useParams();

    const searchParams = useSearchParams();

    //массив-заготовка с фактическими путями
    const pathArray = useMemo(() => {
        const res = pathnames !== '/' ? pathnames.split('/') : [];
        if (searchParams.has('history')) res.push('history');
        return res;
    }, [pathnames, searchParams]);

    const [breadcrumbs, setBreadcrumbs] = useState<Array<{
        href: string;
        text: string;
    }>>([]);

    useEffect(() => {

        //дополняем хлебные крошки данными из динамических путей
        (async function () {
            //объект с переводами для динамических путей (slug)
            const slugNames: {
                [key: string]: string
            } = {};
            if (params.category !== 'search') {
                const categories = await getCategories();
                slugNames[params.category] = categories && categories.filter((item) => item.path === params.category)[0]?.name || '';
            }
            if (params.dishId) {
                const dish = await getDishById(params.dishId[0]);
                slugNames[params.dishId[0]] = dish && dish.productName || '';
            }
            //формируем готовые хлебные крошки
            const isLastEl = (index: number) => {
                return params.dishId ? index === (pathArray.length - 2) : index === (pathArray.length - 1)
            };

            const breadcrumbs = pathArray.map((path, index) => {
                if (path === 'categories') return;
                const basePageIndex = basePages.findIndex((item) => item.path === path);
                const text = basePages[basePageIndex]?.name || slugNames[path];
                if (!text) return;
                return {
                    text,
                    href: isLastEl(index) ? '' : (pathArray.slice(0, index + 1).join('/') || '/'),
                };
            });
            setBreadcrumbs(breadcrumbs.filter(breadcrumbs => breadcrumbs !== undefined));
        })();
    }, [params, pathArray]);

    return (
        <>
            {
                breadcrumbs.length > 1 && <Box
                    role="presentation"
                    sx={{
                        pt: { mobile: '16px', tablet: '30px', desktop: '64px' },
                    }}
                >
                    <Breadcrumbs
                        separator={
                            <FiberManualRecordIcon
                                sx={{
                                    fontSize: { mobile: '6px', tablet: '8px', desktop: '12px' },
                                    '&': {
                                        color: '#828282',
                                    },
                                }}
                            />
                        }
                        aria-label="breadcrumb"
                    >
                        {
                            breadcrumbs.map(({ text, href }, i) => (
                                <Typography
                                    key={text}
                                    // component={href ? <Link href={href} /> as unknown as ElementType : 'span'}
                                    component={href ? Link : 'span'}
                                    href={href || '/'}
                                    sx={[{
                                        fontSize: {
                                            mobile: '12px',
                                            tablet: '16px',
                                            desktop: '22px',
                                        },
                                    }, i !== breadcrumbs.length - 1 && {
                                        color: '#828282',
                                        '&:hover': {
                                            color: 'accent.main',
                                        }
                                    }]}
                                >{text}</Typography>
                            ))
                        }
                    </Breadcrumbs>
                </Box>
            }
        </>
    );
}