import React from 'react'

function login() {
    return (
        <div className='container flex'>
            <form>
                <label className='block'>
                    <span className='block text-sm font-medium text-slate-700'>Username</span>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
                <label className='block'>
                    <span className='block text-sm font-medium text-slate-700'>Password</span>
                    <input type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
                <button type="button" className="bg-indigo-500">
                    <svg className="motion-reduce:hidden animate-spin" viewBox="0 0 24 24"></svg>
                    Processing...
                </button>
            </form>
        </div>
    )
}

export default login
