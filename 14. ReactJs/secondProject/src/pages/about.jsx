import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About(){
  return (
    <div>
      <Header />
      <main className="container py-3">
        <h1 className="py-3">About Todo</h1>
        <p>To-do lists are a simple yet effective way to organize your tasks and improve productivity. Whether you are an office worker, freelancer, or housewife, learning how to make them can help you tackle your daily tasks, chores, and responsibilities in the most efficient way. To put it in simple words, a to-do list is basically a list of everything that you have to complete in a certain period of time.</p>
        <p>Generally, the most important tasks are placed at the top of such lists, while the least important ones are placed at the bottom. By prioritizing tasks in this way, you will be able to track which one needs your immediate attention and which one you can leave until later.</p>
        <p>To-do lists are simple yet one of the most effective tools to enhance your productivity. By creating an organized list, you can feel prepared and become productive in all aspects of your life.</p>
      </main>
      <Footer />
    </div>
  )
}

