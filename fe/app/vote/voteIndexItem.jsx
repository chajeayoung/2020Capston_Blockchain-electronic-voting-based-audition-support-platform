import React, {Component}from 'react'
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import ItemCard3 from '../items/itemCard3_big.jsx';
=======
import ItemCard3 from '../items/ItemCard3.jsx';
>>>>>>> jaeyoung
import './voteIndex.css';
import { Pagination } from '@material-ui/lab';

const regeneratorRuntime = require("regenerator-runtime");
const axios = require('axios');

class VoteIndex extends Component {
    constructor(props){
        super(props);
        this.state = { data: [] };
        // this.url = this.props.url;
<<<<<<< HEAD
        // asds
=======
>>>>>>> jaeyoung
    }

    // async componentDidMount(){
    //     console.log(this.url);
    //     let {data} = await axios.get(this.url);
    //     this.props.getCount(data.pop()); 

    //     this.setState({data});
    // }
    // componentWillReceiveProps(nextProps){
    //     this.url = nextProps.url;
        
    //     this.componentDidMount();
    // }
    render() {
        const { data } = this.props;
<<<<<<< HEAD
        // console.log(this.props);
=======
        console.log(this.props);
>>>>>>> jaeyoung
        return data.map((vote,index)=>{
            return (
                <div key={'div'+index} className="vote_index_item">
                    <a href={"/vote/"+vote.id}>
                        <ItemCard3 img={vote.thumbnail} title={vote.title}/>
                    </a>
<<<<<<< HEAD
                    {/* <a href={'/vote/result/'+vote.id}>실시간 투표 결과</a> */}
=======
                    <a href={'/vote/result/'+vote.id}>실시간 투표 결과</a>
>>>>>>> jaeyoung
                </div>
            )
        })
      }
}
export default VoteIndex;
