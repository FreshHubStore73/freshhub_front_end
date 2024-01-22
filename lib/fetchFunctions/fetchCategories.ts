export const fetchCategories = async () => {
    try {
        const response = await fetch('/api/categories');
        const categories = await response.json();
        return categories;
    } catch(error) {
        console.log(error);
    }
}