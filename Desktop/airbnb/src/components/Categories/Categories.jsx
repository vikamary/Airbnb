import Filter from '../Filter/Filter';
import List from '../List/List';
import categoriesData from './../../data/list.json'
import './style.scss';

const Categories = () => {
  return ( 
    <div className="catrgories">
        <div className="container">
          <div className="categories__row">
            <div className="categories__list">
              {
                categoriesData.map((category)=>{
                  return (
                    <List 
                      title={category.title} 
                      img={category.img}
                    />
                  )
                })
              }
              
            </div> 
            <div className="categories__filter">
              <Filter />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Categories;