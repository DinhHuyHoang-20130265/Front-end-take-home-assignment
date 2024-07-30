import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const statusValues = ['all', 'pending', 'completed']
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root className={'pt-10'} defaultValue={'all'}>
          <Tabs.List className={'group flex items-center py-2 pr-4'}>
            {statusValues.map((status, index) => (
              <Tabs.Trigger
                type={'button'}
                value={status}
                key={index}
                className={`mr-2 h-11 rounded-full border border-gray-200 px-5 py-2 font-bold
                  data-[state=active]:bg-gray-700 
                  data-[state=inactive]:bg-white 
                  data-[state=active]:text-white 
                  data-[state=inactive]:text-gray-700
              `}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {statusValues.map((status, index) => (
            <Tabs.Content value={status} key={index}>
              <div className="pt-10">
                <TodoList
                  statusFilter={
                    status === 'all'
                      ? (statusValues.filter((item) => item !== 'all') as (
                          | 'pending'
                          | 'completed'
                        )[])
                      : (statusValues.filter((item) => item === status) as (
                          | 'pending'
                          | 'completed'
                        )[])
                  }
                />
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
