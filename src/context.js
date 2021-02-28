import Web3 from 'web3'
import Ticket1_0feed from './components/Ticket1_0/feed'

const context = {

units: function() {
        return 1000000
      }

}


const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
export default context