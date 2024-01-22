import styles from './page.module.scss';
type Props = { params: { category: string } };

export default function CategoryPage({ params }: Props) {
    const { category } = params;
    console.log(category);
    return (
        <>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} category page</h1>
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore necessitatibus
                tenetur officia similique quasi consectetur aut. Delectus iusto saepe, id, ducimus
                perferendis distinctio vel repellat et aliquid cumque impedit at.
            </div>
        </>
    );
}
