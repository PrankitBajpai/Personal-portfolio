import { useState } from 'react'
import Nava from './components/navi'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/projects'
import Contact from './components/contact'
function App() {
  
  return (
    <>
     <Nava></Nava>
      <Hero></Hero> 
      <About></About>
      <Skills></Skills>
    <Project name="WAY TO HEALTH" im="https://media.istockphoto.com/id/2153823097/photo/cheerful-athletic-couple-jogging-through-the-park.jpg?s=612x612&w=0&k=20&c=7ZDGNkOSuXWxEmJkKpbisVSvo5mM3d3VcHkVhLhSD1Q="
    f1="AI-Based Personalized Health Recommendations ( Weight Loss, Muscle Gain , Bulking )🏋️ "
    f2="AI-Based Diet Plan Suggestion 🥗"
    f3="AI-Based Workout Plan Suggestion 🏃"
    f4="Real Time Calorie Tracking 🔥"
    f5="Interactive Progress Dashboard 📊"
    n="1"></Project>
    <Project name="POSE FIT AI" im="https://yogifismart.com/cdn/shop/articles/man-fantasy-setting-practicing-yoga-mindful-meditation_1.jpg?v=1738227236&width=1500"
    f1="AI-Based Yoga Trainer 🧘‍♂️"
    f2="Realtime Yoga Poses Detection"
    f5="Learn Yoga Easily With AI and Become Expert In Yoga"
    e="&#x1F4AA;"
    f3="Best Yoga Tutorials Suggestion 📺"
    f4="Count Time Duration and Progress Analysis Dashbord 📈"
    n="2"></Project>
    <Project name="IMA-GINIE-🧞‍♂️"im="https://media.licdn.com/dms/image/v2/D5612AQHD0DbZrkq9-w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694164747539?e=2147483647&v=beta&t=KvjgfKgEf3jPUlylFj-kNg9Q9RyenkgBa-5GotJXipM"
    f1="🔥 Real-time Image Generation Using AI"
    f2="🎨 Customizable Prompt Input"
    f3=" 🖼️ Download Images"
    f4="🌐 Accurate Responses"
    f5="🚀 Responsive & Optimized Frontend"
    n="3"></Project>
    <Project name="Diabities Prediction Using ML" im="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTziY3g5ScnZIenUIsAwaykQXvECfFdxo_vrqeiSHdWh2lksNs8ZcffAotojN1SXjjU9Qo&usqp=CAU"
    f1="🤖 ML-Based Prediction"
    f2="💾 Local Model Integration"
    f3="📝 Personalized Risk Report"
    f4="🧑‍⚕️AI Based suggestions "
    f5="🧮 Health Metric-Based Prediction"
    n="4"></Project>
    <Contact></Contact>
    </>
  )
}

export default App
