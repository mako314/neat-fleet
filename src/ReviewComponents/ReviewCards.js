import React from 'react';

// key={gameReview.id}
// author={gameReview.author}
// socialMedia={gameReview.socialMedia}
// image={gameReview.image}
// gameTitle={gameReview.gameTitle}
// tags={gameReview.tags}
// review={gameReview.review}
// developer={gameReview.developer}
// system={gameReview.system}
// rating={gameReview.rating}

function ReviewCards({author, socialMedia, image, gameTitle, tags, review, developer, system, rating}){

    let mappedTags = tags.map((tag) => (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
    ))

    return (

  

<div className="max-w-sm rounded overflow-hidden shadow-lg">

  <img className="object-scale-down h-48 w-96" src={image} alt={gameTitle}/>

  <div className="px-6 py-4">
    <h1 className="font-bold text-xl mb-2">{gameTitle}</h1>
    <h2 className="font-style: italic font font-semibold text-xs mb-2">{author}</h2>
    <h3 className ="font-style: italic font font-semibold text-xs mb-2" >{socialMedia}</h3>
    <p className="text-gray-700 text-base">
        Review Content Here{/* {review} */}
    </p>
  </div>

  <div className="px-6 pt-4 pb-2">
    {mappedTags}
  </div>

</div>
    )
}

export default ReviewCards;