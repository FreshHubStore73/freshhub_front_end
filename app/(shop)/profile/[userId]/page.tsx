import styles from './page.module.scss';

type Props = { params: { userId: string } };

const page = ({ params }: Props) => {
    const { userId } = params;
    return <h1>User's '{userId}' profile page</h1>;
};

export default page;
