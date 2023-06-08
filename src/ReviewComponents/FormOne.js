import React, {useState} from 'react';

// conditionals we may need: 
// toggle review rating (possibly more to come)

//move social media links to bottom
//flex items-center max-w-md mx-auto


// on change on select, stateVariable, e.target.postType.value 

function FormOne({gameReviews, setGameReviews, gameGuides, setGameGuides, gameDiscussions, setGameDiscussions}){
    const [submitType, setSubmitType] = useState("")
    const [tagSubmission, setTagSubmission] = useState([])

    // console.log(submitType) // console logged to make sure im getting the correct submit type

    function handleSubmit(e){
    e.preventDefault()

    // setSubmitType(e.target.postType.value) // Using state to grab the category of the submission. (review, guides, discussion)
    //This works, I also did typeof to determine whether or not this is a string.


    //make an object for discussions
   

    //object to take in guide information
    
    //object to take in discussion information
    

    // console.log(newDiscussion)

    if (submitType === "reviews" ) {
        const newReview = {
            author: e.target.name.value,
            socialMedia:e.target.socialmedia.value,
            image: e.target.image.value,
            gameTitle: e.target.title.value,
            tags: tagSubmission,
            review: e.target.review.value,
            developer: e.target.developer.value,
            system: e.target.systems.value,
            rating: e.target.rating.value
        }

    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newReview)
    })
    .then(resp => resp.json())
    .then(newReview => setGameReviews([...gameReviews, newReview]))
    } else if (submitType === "guides") {
        const newGuide= {
            author: e.target.name.value,
            socialMedia:e.target.socialmedia.value,
            image: e.target.image.value,
            gameTitle: e.target.title.value,
            tags: tagSubmission,
            guide: e.target.guide.value,
            developer: e.target.developer.value,
            system: e.target.systems.value,
            rating: e.target.rating.value
        }

        fetch('http://localhost:4000/guides', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newGuide)
    })
    .then(resp => resp.json())
    .then(newGuide => setGameGuides([...gameGuides, newGuide]))
    } else {
        const newDiscussion = {
            author: e.target.name.value,
            socialMedia:e.target.socialmedia.value,
            title: e.target.title.value,
            discussion: e.target.discussion.value
        }

        fetch('http://localhost:5000/discussions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(newDiscussion)
    })
    .then(resp => resp.json())
    .then(newDiscussion => setGameDiscussions([...gameDiscussions, newDiscussion]))
    }

    //(submitType === "discussions")
    }


    const reviewForm = (
        <>
            <label> Author: 
                <input type="text" name="name" placeholder="name"/>
            </label>
            
            <label>
                Game Title
                <input type="text" name="title" placeholder="title"/>
            </label>

            <label>
                Image
                <input type="text" name="image" placeholder="image link"/>
            </label>

            <label>
                Developer
                <input type="text" name="developer" placeholder="developer"/>
            </label>
            <label>
                Select a System:
                <select name="systems">
                    <option value="PC"> PC </option>
                    <option value="PlayStation"> PlayStation 5 </option>
                    <option value="Xbox"> Xbox Series X|S </option>
                    <option value="Nintendo"> Nintendo Switch </option>
                </select>
            </label>

            {/* Tag stuff  I'd ideally like to change the values to something capitalized, at least the first letter, yes I know it's a mess.
            Possibly change onChange to an onClick, because atm you can click an infinite amount of times.
            */}
            <label>

                Tags, Check all that apply:

                <label>
                Single Player
                <input type= "radio" name="role-playing" value="role-playing" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Multiplayer
                <input type= "radio" name="multiplayer" value="multiplayer" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Role Playing 
                <input type= "radio" name="role-playing" value="role-playing" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Puzzlers and Party
                <input type= "radio" name="puzzlers-and-party" value="puzzlers-and-party" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Shooter
                <input type= "radio" name="shooters" value="shooters" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Sports
                <input type= "radio" name="sports" value="sports" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>
                
                <label>
                Simulation
                <input type= "radio" name="simulation" value="simulation" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Strategy
                <input type= "radio" name="strategy" value="strategy" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Action
                <input type= "radio" name="action" value="action" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>
                
                <label>
                Adventure
                <input type= "radio" name="adventure" value="adventure" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Openworld
                <input type= "radio" name="open-world" value="open-world" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Sandbox
                <input type= "radio" name="sandbox" value="sandbox" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Real-time Strategy
                <input type= "radio" name="real-time-strategy" value="real-time-strategy" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Multiplayer Online Battle Arena 
                <input type= "radio" name="multiplayer-online-battle-arena" value="moba" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Platformer
                <input type= "radio" name="platformer" value="platformer" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Survival and Horror
                <input type= "radio" name="survival-and-horror" value="survival-and-horror" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Battle Royale
                <input type= "radio" name="battle-royale" value="battle-royale" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Fighting
                <input type= "radio" name="fighting" value="fighting" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

            </label>

            <label> Rating: </label>
                <input type="text" name="rating" placeholder="Rating"/>

            <label>
                Review
                <textarea
                    name="review"
                    defaultValue="Review"
                    rows={4}
                    cols={40}
                />
            </label>

            <label>
                Social Media Links
                <input type="text" name="socialmedia" placeholder="social-media"/>
            </label>
            {/* this button needs to be pressed twice */}
            <button className="bg-red-700" type="submit"> SUBMIT BUTTON </button>

        </>
    )

    const guideForm = (
        <>
             <label> CHANGE THIS BACK TO AUTHOR BUT ATM THIS IS GUIDES: 
                <input type="text" name="name" placeholder="name"/>
            </label>
            
            <label>
                Game Title
                <input type="text" name="title" placeholder="title"/>
            </label>

            <label>
                Image
                <input type="text" name="image" placeholder="image link"/>
            </label>

            <label>
                Developer
                <input type="text" name="developer" placeholder="developer"/>
            </label>
            <label>
                Select a System:
                <select name="systems">
                    <option value="PC"> PC </option>
                    <option value="PlayStation"> PlayStation 5 </option>
                    <option value="Xbox"> Xbox Series X|S </option>
                    <option value="Nintendo"> Nintendo Switch </option>
                </select>
            </label>

            {/* tag stuff prone to change */}
            <label>

                Tags, Check all that apply:

                <label>
                Single Player
                <input type= "radio" name="role-playing" value="role-playing" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Multiplayer
                <input type= "radio" name="multiplayer" value="multiplayer" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Role Playing 
                <input type= "radio" name="role-playing" value="role-playing" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Puzzlers and Party
                <input type= "radio" name="puzzlers-and-party" value="puzzlers-and-party" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Shooter
                <input type= "radio" name="shooters" value="shooters" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Sports
                <input type= "radio" name="sports" value="sports" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>
                
                <label>
                Simulation
                <input type= "radio" name="simulation" value="simulation" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Strategy
                <input type= "radio" name="strategy" value="strategy" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Action
                <input type= "radio" name="action" value="action" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>
                
                <label>
                Adventure
                <input type= "radio" name="adventure" value="adventure" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Openworld
                <input type= "radio" name="open-world" value="open-world" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Sandbox
                <input type= "radio" name="sandbox" value="sandbox" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Real-time Strategy
                <input type= "radio" name="real-time-strategy" value="real-time-strategy" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Multiplayer Online Battle Arena 
                <input type= "radio" name="multiplayer-online-battle-arena" value="moba" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Platformer
                <input type= "radio" name="platformer" value="platformer" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Survival and Horror
                <input type= "radio" name="survival-and-horror" value="survival-and-horror" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Battle Royale
                <input type= "radio" name="battle-royale" value="battle-royale" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

                <label>
                Fighting
                <input type= "radio" name="fighting" value="fighting" onChange={(e) => setTagSubmission([...tagSubmission, e.target.value])}/>
                </label>

            </label>

            <label> Rating: </label>
                <input type="text" name="rating" placeholder="Rating"/>

            <label>
                Guide
                <textarea
                    name="guide"
                    defaultValue="Guide"
                    rows={4}
                    cols={40}
                />
            </label>

            <label>
                Social Media Links
                <input type="text" name="socialmedia" placeholder="social-media"/>
            </label>
            {/* this button needs to be pressed twice */}
            <button className="bg-red-700" type="submit"> SUBMIT BUTTON </button>

        </>
    )


    const discussionForm = (

       <>
        <label> 
            Author: 
            <input type="text" name="name" placeholder="name"/>
         </label>

        <label>
            Title
            <input type="text" name="title" placeholder="title"/>
        </label>

        <label>
            Social Media Links
            <input type="text" name="socialmedia" placeholder="social-media"/>
        </label>

       <label>
         Discussion
        <textarea
            name="discussion"
            defaultValue="Discussion"
            rows={4}
            cols={40}
            />
      </label>   
      <button className="bg-red-700" type="submit"> SUBMIT BUTTON </button>
      </>
    )


    return(
        // may need to do a form here
        <div className = "form-container">
        <form className="form"
              onSubmit={handleSubmit}>

                <label>Submission Type

                <select name="postType" 
                onChange={(e) => setSubmitType(e.target.value)}>
                <option> Please Select an Option Below </option>
                <option value="reviews">Reviews</option>
                <option value="guides">Guides</option>
                <option value="discussions">Discussions</option>
                </select>

                </label>

                {submitType === "reviews" ? reviewForm : "" }
                {submitType === "guides" ? guideForm : "" }
                {submitType === "discussions" ? discussionForm : "" }
        </form>

        </div>
    )
}

export default FormOne;