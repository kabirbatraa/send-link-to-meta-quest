import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Input } from "@/components/ui/input"

function App() {

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div style={{height: "100vh", padding:"20%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          {/* <div style={{width: "50%"}}> */}
            <Input type="url" placeholder="https://google.com"
              style={{marginBottom: "10px"}}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={() => {
              // console.log("hello");

              let url = inputValue;

              if (url == "") {
                url = "https://google.com"
              }

              // Add https:// if missing
              else if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
              }
              
              // validation is useless if we add https:// when it is missing
              // // validate url using URL constructor
              // try {
              //   new URL(url);
              //   window.open('https://www.oculus.com/open_url/?url=' + url, '_blank', 'noopener,noreferrer');
              // } catch (e) {
              //   alert("Please enter a valid URL");
              // }

              window.open('https://www.oculus.com/open_url/?url=' + url, '_blank', 'noopener,noreferrer')
            }} >Send</Button>
          {/* </div> */}
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
