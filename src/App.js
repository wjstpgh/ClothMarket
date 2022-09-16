import './categories.styles.scss';

const App=()=>{
  const categories=[
    {
      id:1,
      title:'모자',
    },
    {
      id:2,
      title:'재킷',
    },
    {
      id:3,
      title:'신발',
    },
    {
      id:4,
      title:'여성용',
    },
    {
      id:5,
      title:'남성용',
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({title,id})=>(
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
