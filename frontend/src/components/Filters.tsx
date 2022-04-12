import '../styles/filters.scss';
import { FiltersInterface } from '../interfaces';
import { useEffect, useState } from 'react';

export default function Filters() {
  const [filter, setFilter] = useState<FiltersInterface>({
    burgers: false,
    chicken: false,
    desserts: false,
    fastFood: false,
    coffee: false,
    mexican: false,
    sandwiches: false,
    soup: false,
    healthy: false,
    breakfast: false,
    asian: false,
    american: false,
    alcohol: false,
    barbecue: false,
  });

  const handleClick = (prop: keyof FiltersInterface) => () => {
    setFilter({
      burgers: false,
      chicken: false,
      desserts: false,
      fastFood: false,
      coffee: false,
      mexican: false,
      sandwiches: false,
      soup: false,
      healthy: false,
      breakfast: false,
      asian: false,
      american: false,
      alcohol: false,
      barbecue: false,
      [prop]: !filter[prop],
    });
  };

  return (
    <div className="filters">
      <div className="filters-upper">
        {filter.burgers ? (
          <div className="active">
            <img
              onClick={handleClick('burgers')}
              src="/icons/Burgers.png"
              alt="Burgers"
              width={35}
            />
            <h5>Burgers</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('burgers')}
              src="/icons/Burgers.png"
              alt="Burgers"
              width={35}
            />
            <h5>Burgers</h5>
          </div>
        )}
        {filter.healthy ? (
          <div className="active">
            <img
              onClick={handleClick('healthy')}
              src="/icons/Healthy.png"
              alt="Healthy"
              width={35}
            />
            <h5>Healthy</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('healthy')}
              src="/icons/Healthy.png"
              alt="Healthy"
              width={35}
            />
            <h5>Healthy</h5>
          </div>
        )}
        {filter.chicken ? (
          <div className="active">
            <img
              onClick={handleClick('chicken')}
              src="/icons/Chicken.png"
              alt="Chicken"
              width={35}
            />
            <h5>Chicken</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('chicken')}
              src="/icons/Chicken.png"
              alt="Chicken"
              width={35}
            />
            <h5>Chicken</h5>
          </div>
        )}
        {filter.desserts ? (
          <div className="active">
            <img
              onClick={handleClick('desserts')}
              src="/icons/Desserts.png"
              alt="Desserts"
              width={35}
            />
            <h5>Desserts</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('desserts')}
              src="/icons/Desserts.png"
              alt="Desserts"
              width={35}
            />
            <h5>Desserts</h5>
          </div>
        )}
        {filter.coffee ? (
          <div className="active">
            <img onClick={handleClick('coffee')} src="/icons/Coffee.png" alt="Coffee" width={35} />
            <h5>Coffee</h5>
          </div>
        ) : (
          <div className="inactive">
            <img onClick={handleClick('coffee')} src="/icons/Coffee.png" alt="Coffee" width={35} />
            <h5>Coffee</h5>
          </div>
        )}
        {filter.soup ? (
          <div className="active">
            <img onClick={handleClick('soup')} src="/icons/Soup.png" alt="Soup" width={35} />
            <h5>Soup</h5>
          </div>
        ) : (
          <div className="inactive">
            <img onClick={handleClick('soup')} src="/icons/Soup.png" alt="Soup" width={35} />
            <h5>Soup</h5>
          </div>
        )}
        {filter.fastFood ? (
          <div className="active">
            <img
              onClick={handleClick('fastFood')}
              src="/icons/Fast Food.png"
              alt="Fast Food"
              width={35}
            />
            <h5>Fast Food</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('fastFood')}
              src="/icons/Fast Food.png"
              alt="Fast Food"
              width={35}
            />
            <h5>Fast Food</h5>
          </div>
        )}
        {filter.mexican ? (
          <div className="active">
            <img
              onClick={handleClick('mexican')}
              src="/icons/Mexican.png"
              alt="Mexican"
              width={35}
            />
            <h5>Mexican</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('mexican')}
              src="/icons/Mexican.png"
              alt="Mexican"
              width={35}
            />
            <h5>Mexican</h5>
          </div>
        )}
        {filter.sandwiches ? (
          <div className="active">
            <img
              onClick={handleClick('sandwiches')}
              src="/icons/Sandwiches.png"
              alt="Sandwiches"
              width={35}
            />
            <h5>Sandwiches</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('sandwiches')}
              src="/icons/Sandwiches.png"
              alt="Sandwiches"
              width={35}
            />
            <h5>Sandwiches</h5>
          </div>
        )}
        {filter.asian ? (
          <div className="active">
            <img onClick={handleClick('asian')} src="/icons/Asian.png" alt="Asian" width={35} />
            <h5>Asian</h5>
          </div>
        ) : (
          <div className="inactive">
            <img onClick={handleClick('asian')} src="/icons/Asian.png" alt="Asian" width={35} />
            <h5>Asian</h5>
          </div>
        )}
        {filter.alcohol ? (
          <div className="active">
            <img
              onClick={handleClick('alcohol')}
              src="/icons/Alcohol.png"
              alt="Alcohol"
              width={35}
            />
            <h5>Alcohol</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('alcohol')}
              src="/icons/Alcohol.png"
              alt="Alcohol"
              width={35}
            />
            <h5>Alcohol</h5>
          </div>
        )}
        {filter.american ? (
          <div className="active">
            <img
              onClick={handleClick('american')}
              src="/icons/American.png"
              alt="American"
              width={35}
            />
            <h5>American</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('american')}
              src="/icons/American.png"
              alt="American"
              width={35}
            />
            <h5>American</h5>
          </div>
        )}
        {filter.breakfast ? (
          <div className="active">
            <img
              onClick={handleClick('breakfast')}
              src="/icons/Breakfast.png"
              alt="Breakfast"
              width={35}
            />
            <h5>Breakfast</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('breakfast')}
              src="/icons/Breakfast.png"
              alt="Breakfast"
              width={35}
            />
            <h5>Breakfast</h5>
          </div>
        )}
        {filter.barbecue ? (
          <div className="active">
            <img
              onClick={handleClick('barbecue')}
              src="/icons/Barbecue.png"
              alt="Barbecue"
              width={35}
            />
            <h5>Barbecue</h5>
          </div>
        ) : (
          <div className="inactive">
            <img
              onClick={handleClick('barbecue')}
              src="/icons/Barbecue.png"
              alt="Barbecue"
              width={35}
            />
            <h5>Barbecue</h5>
          </div>
        )}
      </div>
      <div className="filters-lower"></div>
    </div>
  );
}
