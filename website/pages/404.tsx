import { ArrowLeftIcon } from '@primer/octicons-react'
import { Button } from 'components/Button'
import { Layout } from 'components/Layout'

const error404 = () => (
  <Layout title={['404 Not Found']} noIndex>
    <section className="text-center">
      <div className="m-8 w-screen max-w-2xl sm:m-16">
        <h1 className="font-rounded text-4xl font-bold tracking-tighter text-gray-700">
          404 Not Found
        </h1>
        <hr className="my-6" />
        <p className="text-lg">Oops! The requested page could not be found.</p>
        <p className="mt-10">
          <Button
            className="w-full max-w-xs text-xs"
            onClick={() => window.history.back()}
            outline
            style={{ color: '#4a5568' }}
          >
            <span className="flex items-center justify-center text-lg">
              <ArrowLeftIcon className="mr-2 h-8 w-8" />
              Back to previous
            </span>
          </Button>
        </p>
      </div>
      <style jsx>{`
        section {
          @apply flex w-full items-center justify-center;

          background-image: url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 40L40 0H20L0 20m40 20V20L20 40' fill='%23f0f0f0' fill-opacity='.2' fill-rule='evenodd'/%3e%3c/svg%3e");
          min-height: inherit;
        }
      `}</style>
    </section>
  </Layout>
)

export default error404
