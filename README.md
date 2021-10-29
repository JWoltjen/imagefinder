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

Why do I like tailwind? It can do a lot with a little code. You can set up a grid this easily: 


  - div className='grid grid-cols-3 gap-4'
  
 You can make your layout responsive this easily: 
 
    - div className='container mx-auto'
    
I also like inline styling for small-size applications. For larger applications or things that I think would need to scale, if I wanted to use Tailwind, I would use tailwind macros within styled components, but for small applications like this, inline styling is fine as well, especially for beginners who are still trying to learn the cause-effect nature of cascading style sheets, which can be maddening. 

