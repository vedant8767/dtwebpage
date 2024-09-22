import React, { useEffect } from 'react';
import './App.css';
import Card from './Card';

function App() {

//   useEffect(()=>{
//     async function fetchData() {
//         const result = await fetch(`https://cors-anywhere.herokuapp.com/https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json`)
//         const data = await result.json()
//         console.log(data)
        
//     }
//     fetchData()
// },[])
  const obj = {
    "_id": {
      "$oid": "63b64dc9e3b230ebb60a495d"
    },
    "_key": "topic:2085",
    "category": "Course",
    "cid": {
      "$numberDouble": "NaN"
    },
    "commitment": "4 hours",
    "commitment_type": "custom",
    "deadline": "",
    "description": "\u003Cp\u003EHave you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.\u003C/p\u003E\n\u003Cp\u003ELet's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.\u003Cbr\u003E80% of the time in researching, and planning and 20% of the time in implementation.\u003C/p\u003E\n\u003Cp\u003ESo for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.\u003C/p\u003E\n\u003Cp\u003ESimilarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.\u003C/p\u003E\n\u003Cp\u003ELet's start thinking together, and search for how you can get the essence of project management.\u003C/p\u003E",
    "faqs": [],
    "globalTags": [],
    "isActive": true,
    "lastposttime": 0,
    "learning_outcomes": [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
    ],
    "mainPid": 0,
    "postcount": 0,
    "pre_requisites": [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning "
    ],
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "short_description": "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    "slug": "2085/technical-project-management",
    "status": "published",
    "tasks": [
      {
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "status": "notworkyet",
        "assets": [
          {
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
          },
          {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
          },
          {
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
          },
          {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
          }
        ]
      }
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
  }
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://deepthought.education/assets/images/logo/logo.svg"
              alt="Deep Thought Logo"
              className="logo-img"
            />
          </div>
          <div className='navpart2'>
            <div className='ciricle'><i class="fa fa-home" aria-hidden="true"></i></div>
            <div className='ciricle'><i class="fa fa-bell" aria-hidden="true"></i></div>
            <div className='ciricle'><i class="fa fa-repeat" aria-hidden="true"></i></div>
            <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </nav>
      </header>

      <main>
        <div className='sidetop'>
          {/* <h1>hello</h1> */}
          <div className="sidecontent">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebarcontent">
            <h1>1</h1>
          </div>
        </div>
        <section className="project-management">
          <h1>Technical Project Management</h1>
          <div className="submit-task">
            <button className="submit-btn">Submit Task</button>
          </div>
        </section>
        <div className='intro'>
          <h1>Explore the world of management</h1>
          <p className="intro-text">
              As a project manager, you play an
              important role in leading a project through initiation, planning,
              execution, monitoring, controlling, and completion. How? Do you
              want to manage each and every step of your life?
            </p>
        </div>
        <div className="notification">
          <div className="notfiy">
            <p>X</p>
            <br />
            <p>N</p>
            <p>O</p>
            <p>T</p>
            <p>I</p>
            <p>C</p>
            <p>E</p>
            <br />
            <p>B</p>
            <p>O</p>
            <p>A</p>
            <p>R</p>
            <p>D</p>
          </div>
        </div>
        

        {/* <section className="journey-board">
          <h2>Journey Board</h2>
          <ul>
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your Pointers</li>
            <li>4SA Method</li>
          </ul>
        </section> */}

        {/* <section className="task-sections"> */}
          {/* <div className="task-card">
            <h3>Technical Project Management</h3>
            <p>
              Description: Story of Alignment, Scope of Agility, Specific
              Accountable Staggering Approach.
            </p>
          </div>

          <div className="task-card">
            <h3>Threadbuild</h3>
            <p>
              Description: Watch the video and Threadbuild, and jot out key
              threads while watching the video.
            </p>
          </div> */}

          {/* <div className="task-card">
            <h3>Structure your Pointers</h3>
            <p>
              Description: Write a 300-400 word article from your thread. Publish
              your understanding and showcase your insights to the world.
            </p>
          </div>

            <div className="task-card">
              <h3>4SA Method</h3>
              <p>
                Description: To explore more, read more about the 4SA method and
                how to bring ideas into progress.
              </p>
            </div> 
            </section>*/}
          <div className="card-container">
          
            <Card title={obj.tasks[0].assets[0].asset_title} description={obj.tasks[0].assets[0].asset_description}>
            <iframe width="480" height="291" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
            </iframe>
            </Card>
            <Card title={obj.tasks[0].assets[1].asset_title} description={obj.tasks[0].assets[1].asset_description}>
              <div className="sub2">
                <div className="intro4sa1">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
                  <h4>Thread A</h4>
                </div>
              </div>
              <div className="blocks">
                <div className="subblock">
                  <p>sub thread 1</p>
                  <input type="text" placeholder='Enter Text Here'/>
                </div>
                <div className="subblock">
                  <p>sub interpretation 1</p>
                  <input type="text" placeholder='Enter Text Here'/>
                </div>
              </div>
              <div className="part2">
                <i class="fa fa-commenting" aria-hidden="true"></i>
                < i class="fa fa-commenting" aria-hidden="true"></i>
                <i class="fa fa-commenting" aria-hidden="true"></i>
                <i class="fa fa-question-circle" aria-hidden="true"></i>
                <div className="dropdown">
                  <h4>select categ</h4>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div className="dropdown">
                  <h4>select proces</h4>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
              </div>
              <div className="subthread">
                <h3>+ sub thread</h3>
              </div>
              <div className="summary">
                  <p>Summary for Thread A </p>
                  <input type="text" placeholder='Enter Text Here'/>
                </div>
            </Card>
            <Card title={obj.tasks[0].assets[2].asset_title} description={obj.tasks[0].assets[2].asset_description}>
              <div className='subcard'>
              <div className="input-group">
                <label>Title</label>
                <input type="text" className="input-field" />
              </div>
              <div className="content">
                <label>Content</label>
                <div className='content-first'>
                  <ul>
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Insert</li>
                    <li>Format</li>
                    <li>Tools</li>
                    <li>Table</li>
                    <li>Help</li>
                    {/* <li><i className="fas fa-home"></i></li> */}
                  </ul>
                  <ul className='arrow-part'>
                    <li><i class="fa fa-arrow-left" aria-hidden="true"></i></li>
                    <li><i class="fa fa-arrow-right" aria-hidden="true"></i></li>
                    <li><i class="fa fa-arrows-alt" aria-hidden="true"></i></li>
                    <li><div><p>Paragrpah</p></div></li>
                    <li><b>...</b></li>
                  </ul>
                </div>
                <div className="content-two"></div>
              </div>
              </div>
            </Card>
            <Card title={obj.tasks[0].assets[3].asset_title} description={obj.tasks[0].assets[3].asset_description}>
             <div className="sa">
              <div className="collapsible-section">
                  <div className='intro4sa'>
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                    <h4>Introduction</h4>
                  </div>
                  <div className='s'>
                    <p>The 4SA Method, How to bring an idea into progress?</p>
                    <a href="/" className="see-more">See More</a>
                  </div>
              </div>

                <div className="collapsible-section">
                  <div className="thread">
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                    <h4>Thread A</h4>
                  </div>
                  <div className="s">
                  <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                  <a href="/" className="see-more">See More</a>
                  </div>
                </div>

                <div className="example-section">
                  <div className="ex">
                    <h4>Example 1</h4>
                  </div>
                  <p>You have a concept, how will you put it into progress?</p>
                </div>
             </div>
            </Card>
        </div>
      
      </main>
    </div>
  );
}

export default App;
