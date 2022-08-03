import CategoryItem from "../category-item/category-item.component";

import './categories-list.styles.scss';

const CategoriesList = ({categories}) => {
    return(
        <div className="categories-list">
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
            ))}
      </div>
    )
}

export default CategoriesList;