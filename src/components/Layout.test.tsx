import { render } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import { beforeAll, describe, test, vi } from 'vitest'
import { SidebarProvider } from "./ui/sidebar"
import { TooltipProvider } from "./ui/tooltip";
import AppSidebar from "./AppSidebar";
import Layout from "./Layout";

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });
})

const renderAppSidebar = () => {
    render(
        <MemoryRouter>
            <TooltipProvider>
                <SidebarProvider>
                    <AppSidebar />
                </SidebarProvider>
            </TooltipProvider>
        </MemoryRouter>
    )
}

const renderAppLayout = () => {
    render(
        <MemoryRouter>
            <TooltipProvider>
                <SidebarProvider>
                    <Layout />
                </SidebarProvider>
            </TooltipProvider>
        </MemoryRouter>
    )
}

describe('app layout test',()=>{
    
    test("app",()=>{
        renderAppLayout()
        renderAppSidebar()
    })
})