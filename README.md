# A Simple Image Finder using Pixabay image search API 

https://recordit.co/GTVW1SlSWN

### Technologies used: 

-React w useEffect and useState hooks

-TailwindCSS


### Patterns used: 

-Fetching data from a third-party api

-querying a search term that is stored in a search component's local state using useState, clearing useState onSubmit(). 

-setting isLoading to a Boolean stored with useState, then conditionally rendering data with a ternary operator within the JSX. 

-destructuring fetched data in ImageCard component props and pass the destructured data within semantic JSX using map(). 

-displaying enlarged modal onClick() of any image. 

-Storing API keys in process.env files

### Takeaways: 

Why do I like tailwind? You can set up a grid this easily: 

  - div className='grid grid-cols-3 gap-4'
  
 You can make your layout responsive this easily: 
 
    - div className='container mx-auto'

