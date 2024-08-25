import { Loading } from '../Loading'
import { Error } from '../Error'

function TodoList ({ children, loading, error }) {
    return (
        <div>
            <div className='centerIcon'>
                {loading && <Loading />}
            </div>

            <div className='centerIcon'>
                {error && <Error />}
            </div>

            <ul>
                {children}
            </ul>
        </div>
    )
}

export { TodoList }
