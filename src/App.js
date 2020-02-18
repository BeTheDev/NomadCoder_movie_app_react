//?? FUNCTION PROPS

// import React from "react";
// //import Potato from "./Potato";
// import PropTypes from "prop-types";

// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
//     rating: 4.5
//   },
//   {
//     id: 2,
//     name: "kimbap",
//     image: "https://i1.wp.com/jajabakes.com/wp-content/uploads/2018/08/cut-kimbab-recipe-1.jpg?w=860",
//     rating: 5.0
//   }
// ];
// //!basic
// // function App() {
// //   return (
// //     <div>
// //       <h1> Hello </h1>
// //       <Food fav="kimchi" />
// //       {/*food component value of kimchi
// //       property value of kimchi(boolean/array)  */}
// //       <Food fav="ramen"/>
// //       <Food fav="bibimbap" />
// //       <Food fav="friedRice" />

// //     </div>
// //   );
// // }

// // function renderFood(dish) {
// //   return <Food name={dish.name} picture={dish.image} />;
// // }

// function Food({ name, picture }) {
//   //console.log(props.fav);
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// //! making dynamic
// function App() {
//   return (
//     <div>
//       {/* return <div>{foodILike.map(renderFood)}</div> */}
//       {foodILike.map(dish => (
//         <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

// export default App;
