"use client"

import {useRef, useState} from "react"
import styles from "./searchbar.module.css"
import { useRouter } from "next/navigation"

interface searchBarPropsType{
  targetPageUrl: string
}

export default function SearchBar(props: searchBarPropsType) {

  const inputRef: any = useRef()
  const [error, setError] = useState("")
  const [searchBarTitle, setSearchBarTitle] = useState("All Results");
  const router = useRouter()

  function handleSearch(){

    // Input Validation
    if(/[^\s]{1,}/gi.test(inputRef.current.value)){

      if(!(/[`]/gi.test(inputRef.current.value))){
        setError("")
        setSearchBarTitle(`Search: ${(inputRef.current.value).trim()}`)
        const encodedText = encodeURIComponent(((inputRef.current.value).trim()).toLowerCase())
        router.push(`${props.targetPageUrl}/${encodedText}`)
      }else{
        // if input is invalid
        setError("Backticks are not allowed in search")
      }
      
    }else{
      //if no text provided
      setError("Please enter something to search")
    }
    
  }

  function handleInputChange(evt: any){
    if(evt.key == "Enter"){
      handleSearch()
    }
  }

  return (
    <aside className={styles.wrapper}>
      <h3 className={styles.searchBarTitle}>{searchBarTitle}</h3>
      <div className={styles.searchBarWrapper}>
        <input ref={inputRef} onKeyDown={handleInputChange} type="text" className={styles.searchBar} placeholder="Search" />
        <button onClick={handleSearch} className={styles.searchButton} title="Search">
          <img src="/img/search-icon.svg" alt="search icon" />
        </button>
        {(error != "") && <div className={styles.error}>{error}</div>}
      </div>
    </aside>
  )
}
