import Omdb from './API\'S/Omdb'
import Quotable from './API\'S/FamousQuotes'
function Apis() {
  return (
    <div className='flex px-20 py-10 space-x-12'>
        <Quotable/>
        <Omdb/>
    </div>
  )
}

export default Apis