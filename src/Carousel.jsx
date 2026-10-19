import { useState } from 'react'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const profiles = [
    {
      id: 1,
      name: 'Ada Lovelace',
      role: 'Software Pioneer',
      age: 28,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Grace Hopper',
      role: 'Compiler Inventor',
      age: 34,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Alan Turing',
      role: 'Computer Scientist',
      age: 41,
      image: 'https://via.placeholder.com/100'
    }
  ]

  const currentProfile = profiles[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <img
        className="size-12 shrink-0"
        src={currentProfile.image}
        alt={currentProfile.name}
      />
      <div>
        <div className="text-xl font-medium text-black dark:text-white">
          {currentProfile.name}
        </div>
        <p className="text-gray-500 dark:text-gray-400">{currentProfile.role}</p>
        <p className="text-gray-500 dark:text-gray-400">Age: {currentProfile.age}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={handlePrevious}
          className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel