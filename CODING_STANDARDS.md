# HIGH CODING STANDARDS

1. Remove any unncessary packages from the project that we are not using
2. Remove any unncessary imports in any file, any unnecessary images or files or any code piece that is not being used anywhere
3. Use proper dynamic loading, suspense boundaries etc. (basics)
4. Modular Design: Clear separation between /components, /containers, /modules, /utils, /api
5. Layered Architecture: Containers handle logic, components handle presentation
6. Folder Structure
    src/
    ├── api/           # Auto-generated API clients
    ├── components/    # Reusable UI components
    ├── containers/    # Business logic containers
    ├── modules/       # Domain modules (auth, axios)
    ├── routes/        # Route configuration
    ├── store/         # Query key factories
    ├── utils/         # Pure utility functions
    ├── views/         # Page-level components
    └── types/         # TypeScript definitions
7. Vite Config: Optimized with plugins (React, SVGR, Visualizer)
8. Clean imports with @/ and @ui/ shortcuts
9. Bundle analysis: Rollup visualizer for optimization
10. UI library - shadcn
11. Constate Pattern: Clean state sharing with React Context
12. Using tanstack react query for fetching data and state management
13. Robust Authentication System
    - JWT Token Management: Secure token storage with automatic refresh
    - Auth Context: Centralized authentication state with constate
    - Higher-Order Components: Authentication wrappers, etc as per the requirements
      * `withIsAuthenticated`: Injects boolean `isAuth` prop for simple auth status checks
      * `withAuthUser`: Injects complete `authUser` object for accessing user data
    - HOC Usage Guidelines:
      * Use `withIsAuthenticated` for conditional rendering based on auth status only
      * Use `withAuthUser` when components need access to user profile data
      * Both HOCs return null/false states for unauthenticated users
      * Example: `withIsAuthenticated` for login/logout buttons, `withAuthUser` for user dashboards
15. API Architecture
    - Swagger TypeScript API: Generated from OpenAPI specs
    - Type-Safe HTTP Client: Axios with full TypeScript support
    - Modular API Classes: Organized by domain (User, Organization, Payment)
    - Interceptors: Global error handling and authentication
16. Comprehensive Linting Setup
    - ESLint: React, TypeScript, and Tailwind-specific rules
    - Prettier: Consistent code formatting
    - Husky: Pre-commit hooks for quality gates
    - lint-staged: Only lint changed files
17. TypeScript Excellence
    - Strict Mode: Maximum type safety
    - Generic Components: Reusable typed components
    - Utility Types: Leverage TypeScript's utility types
    - Ambient Declarations: Proper module typing
18. Environment Management
    - Envalid: Runtime environment validation
    - Type-Safe Config: Environment variables with TypeScript
    - Multi-Environment: Test, development, production configurations
19. Loading & Code Splitting
    - Loadable Components: Dynamic imports for route-based splitting
    - React.memo: Memoization for expensive components
    - useMemo/useCallback: Optimized hook usage
    - Query Optimizations: Stale-while-revalidate patterns
20. Monitoring (Sentry): Error tracking and performance monitoring
21. Form Management
    - React Hook Form: Performance-optimized forms
    - Zod Validation: Schema-based validation
22. Date Utilities: Using date-fns for date handling
23. Use svgr for use svg images as react components. Use Image tag components as less as possible




## Query Functions file structure
src/store
    ├── index.ts
    ├── api.ts
    └── user-query.ts



## Naming Conventions

- Components should be named in PascalCase, e.g. `MyComponent.tsx`
- Utility files should be named in kebab-case, e.g. `my-utility.ts`
- Pages should be named in PascalCase, e.g. `MyPage.tsx`
- Hooks should be named in camelCase, e.g. `useMyHook.ts`
- Constants should be named in PascalCase, e.g. `MyConstant.ts`
- Enum/Interface file name should be named in small case followed by type, e.g. `file.enum.ts` or `file.interface.ts`
- Variables should be named in camelCase, e.g. `myVariable.ts`
- Folders should be named in kebab-case, e.g. `my-folder`
- Functions should be named in camelCase, e.g. `myFunction.ts`
- If creating a component of certain parent component the file name and component name should be ParentComponentName followed by component name in PascalCase, e.g. ModalShare.tsx (here modal is the parent component and share is the child component)


## Code Style

- Types should be named in PascalCase and prefixed with `Type`, e.g. `TypeUser`
- Enums should be named in PascalCase and prefixed with `Enum`, e.g. `EnumUserRole`
- Interfaces should be named in PascalCase and prefixed with `I`, e.g. `IUserRole`
- Use arrow functions instead of function declarations, e.g. `() => {}` instead of `function() {}`
- Use template literals instead of string concatenation, e.g. `\`Hello ${name}\` instead of `'Hello ' + name`
- Use const for variables that are not reassigned, e.g. `const name = 'John'` instead of `let name = 'John'`
- Use let for variables that are reassigned, e.g. `let name = 'John'` instead of `const name = 'John'`
- Use const for constants, e.g. `const PI = 3.14` instead of `let PI = 3.14`
- Use const for objects and arrays, e.g. `const user = { name: 'John', age: 30 }` instead of `let user = { name: 'John', age: 30 }`
- Use const for functions, e.g. `const add = (a, b) => a + b` instead of `let add = (a, b) => a + b`

## More
- Use framer motion for animations if required
