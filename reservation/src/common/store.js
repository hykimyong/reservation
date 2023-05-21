import create from 'zustand';

export const useStore = create((set,get)=>({
    data : {},
    setData: (oData)=> set({data : oData}),
    mobileClick : false,
    setMobileClick : (state)=>set({mobileClick : state})
}))