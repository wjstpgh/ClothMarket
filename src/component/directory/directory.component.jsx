import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';

const categories=[
  {
    "id": 1,
    "title": "모자",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "route":"shop/hats"
  },
  {
    "id": 2,
    "title": "아우터",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "route":"shop/jackets"
  },
  {
    "id": 3,
    "title": "신발",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "route":"shop/sneakers"
  },
  {
    "id": 4,
    "title": "여성용",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "route":"shop/womens"
  },
  {
    "id": 5,
    "title": "남성용",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "route":"shop/mens"
  }
];

const Directory=()=>{
  return (
    <div className="directory-container">
      {categories.map((category)=>(
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;