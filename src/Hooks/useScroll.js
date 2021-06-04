import {useEffect} from 'react'
import {setScroll} from '../store/action'
import {useDispatch} from 'react-redux'


export const useScroll = () => {
    const dispatch = useDispatch()

    const handleScroll = () => {
        if (window.scrollY > 70) dispatch(setScroll(true))
        else dispatch(setScroll(false)) 
      }

      useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
      }, [])
      return handleScroll
}
