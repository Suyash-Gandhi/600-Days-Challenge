import { useState } from 'react'
import React from 'react'

export default function form() {
    const [form, setform] = useState({ email: "", password: "", })
    const submit = (e) => {

        e.preventDefault()
        console.log(form);

    }


    return (
        <div>

            <form onSubmit={submit}>
                <input type="text" value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} />
                <input type="text" value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })} />
             <button type='submit'>submit</button>
            </form>
           

        </div>
    )
}
