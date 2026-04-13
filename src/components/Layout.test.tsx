import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { TooltipProvider } from './ui/tooltip';

const renderLayout = () => {
  render(
    <AuthProvider>
      <TooltipProvider>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </TooltipProvider>
    </AuthProvider>,
  );
};

describe('Leave Component', () => {
  test('renders Leave component content', () => {
    renderLayout();
  });
});
