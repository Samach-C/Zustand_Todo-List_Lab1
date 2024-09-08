import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const myStore = (set) => ({
    arr:[
        { id: 1, title: 'Word...'},
      ],
      addArr:(newValue) => set((state) => ({
        arr:[...state.arr, { id: Date.now(), title: newValue } ]
      })),
      delArr:(id) => set((state) => ({
        arr: state.arr.filter((item, index) => item.id !== id)
      })),
      editArr: (id, newValue) =>
        set((state) => ({
          arr: state.arr.map((item) =>
            item.id === id ? { ...item, title: newValue } : item
          ),
        })),

})


const usePersist = {
    name: 'my-store',
    getStorage : () => localStorage,
    partialize : (state) => ({
      arr : state.arr
    })
  }

const useStore = create(persist(myStore, usePersist))

export default useStore





  
