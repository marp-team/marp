import { Button } from 'components/Button'
import { Layout } from 'components/Layout'

const error404 = () => (
  <Layout title={['404 Not Found']} noIndex>
    <section className="text-center">
      <div className="w-screen m-8 max-w-2xl sm:m-16">
        <h1 className="font-rounded text-4xl text-gray-700 font-bold tracking-tighter">
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
            <span className="flex justify-center items-center text-lg">
              <img
                className="w-8 h-8 mr-2"
                src="https://icongr.am/octicons/arrow-left.svg?color=4a5568"
                alt="←"
              />
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
