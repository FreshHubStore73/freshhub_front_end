'use client';
import { InputAdornment, SvgIcon } from '@mui/material';
import { useState, FC, useRef } from 'react';
import InputMask from 'react-input-mask';
import { CustomInput, EditBtn } from './ContactField';

type Props = { data: string };

const Phone = ({ isEdit }: { isEdit: boolean }) => (
    <SvgIcon
        sx={{
            width: { mobile: '29px', tablet: '40px', desktop: '50px' },
            height: { mobile: '29px', tablet: '40px', desktop: '50px' },
            '& path': {
                fill: (theme) => (isEdit ? theme.palette.text.primary : '#828282'),
            },
            '.MuiOutlinedInput-root.Mui-focused & path ': {
                fill: (theme) => (isEdit ? theme.palette.text.secondary : '#828282'),
            },
        }}
    >
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M43.1211 31.6656L33.8985 27.5386C33.5409 27.3839 33.1505 27.3207 32.7624 27.3548C32.3743 27.3889 32.0009 27.5192 31.6758 27.7339C31.6498 27.7504 31.625 27.7687 31.6016 27.7886L26.7578 31.9175C26.65 31.9833 26.5277 32.0214 26.4016 32.0286C26.2756 32.0357 26.1497 32.0117 26.0352 31.9585C22.8633 30.4273 19.5801 27.1695 18.0489 24.0347C17.9947 23.921 17.9695 23.7957 17.9757 23.6699C17.9818 23.5442 18.019 23.4219 18.084 23.314L22.2246 18.3902C22.2442 18.3667 22.2617 18.3414 22.2793 18.316C22.4934 17.9914 22.6233 17.6186 22.6574 17.2313C22.6915 16.8439 22.6287 16.4542 22.4746 16.0972L18.3399 6.89018C18.1403 6.42386 17.7947 6.03489 17.3552 5.78168C16.9157 5.52846 16.4059 5.42467 15.9024 5.48588C13.4445 5.80995 11.1886 7.01765 9.55613 8.88342C7.92363 10.7492 7.02613 13.1454 7.03127 15.6246C7.03127 30.7027 19.2969 42.9683 34.375 42.9683C36.8542 42.9734 39.2504 42.0759 41.1162 40.4434C42.9819 38.8109 44.1896 36.5551 44.5137 34.0972C44.5745 33.596 44.4717 33.0885 44.2208 32.6504C43.9699 32.2122 43.5842 31.8668 43.1211 31.6656ZM42.9688 33.9019C42.693 35.9834 41.6685 37.8933 40.0868 39.2743C38.5052 40.6554 36.4747 41.4131 34.375 41.4058C20.1602 41.4058 8.59377 29.8394 8.59377 15.6246C8.5865 13.5248 9.34422 11.4944 10.7253 9.91273C12.1063 8.3311 14.0161 7.30661 16.0977 7.03081C16.1289 7.02887 16.1602 7.02887 16.1914 7.03081C16.3456 7.03212 16.4959 7.07899 16.6234 7.16553C16.7509 7.25207 16.85 7.3744 16.9082 7.51713L21.0313 16.7242C21.0794 16.8367 21.1004 16.9589 21.0926 17.0811C21.0848 17.2032 21.0484 17.3218 20.9864 17.4273L16.8477 22.3492C16.8281 22.3746 16.8086 22.398 16.791 22.4253C16.5705 22.7625 16.4407 23.1508 16.414 23.5528C16.3873 23.9548 16.4647 24.3569 16.6387 24.7203C18.336 28.1949 21.836 31.6695 25.3496 33.3667C25.7155 33.5396 26.1198 33.6148 26.5234 33.585C26.9269 33.5553 27.3159 33.4215 27.6524 33.1968L27.7246 33.1421L32.5742 29.0171C32.678 28.9538 32.7953 28.9159 32.9165 28.9068C33.0377 28.8976 33.1594 28.9173 33.2715 28.9644L42.4922 33.0972C42.6478 33.162 42.7783 33.2753 42.8642 33.4204C42.9501 33.5654 42.9868 33.7343 42.9688 33.9019Z"
                fill="#040705"
            />
        </svg>
    </SvgIcon>
);

const ContactPhoneField: FC<Props> = ({ data }) => {
    const [isEdit, setEdit] = useState(false);
    const [value, setValue] = useState(data);

    const btnText = isEdit ? 'Save' : 'Change';

    const inputRef = useRef<HTMLInputElement>(null);

    const toggleEdit = () => {
        setEdit((prevState) => !prevState);
        if (!isEdit) {
            inputRef.current!.focus();
        }
    };
    const handleChange = (e: any) => {
        if (!isEdit) return;
        setValue(e.target.value);
    };

    return (
        <InputMask mask="+1 999 999 9999" onChange={handleChange} value={value} maskPlaceholder="x">
            <CustomInput
                inputRef={inputRef}
                name="phoneNumber"
                aria-label="user-phone"
                isdisabled={!isEdit}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position={'start'}>
                            <Phone isEdit={isEdit} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <EditBtn onClick={toggleEdit}>{btnText}</EditBtn>
                        </InputAdornment>
                    ),
                }}
            />
        </InputMask>
    );
};
export default ContactPhoneField;
