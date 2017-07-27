import Library from './library'
import './style.css'

if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module')
  })
}