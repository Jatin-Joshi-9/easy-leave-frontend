import { render } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import { describe, test } from 'vitest'
import AppSidebar from "../src/components/app-sidebar"
const renderApp = () => {
    render(
        <MemoryRouter>
            <AppSidebar />
        </MemoryRouter>
    )
}
describe('app test',()=>{
    test("app",()=>{
        renderApp()
    })
})