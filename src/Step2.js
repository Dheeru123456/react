import React from 'react';
import '../App.css';

class Step2 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      arr: [
        {
          degree: "",
          deg_name: "",
        }
      ]
    }


  }

  detail(e,i) {
    const {value} =e.target;
    this.state.arr[i][e.target.name]=value
    let st=this.state;
    this.setState(this.state  )

    this.props.allData(st);
  }

  addMore() {
    // e.preventDefault();
    let newItem = {
      degree: "",
      deg_name: ""
    }
    // this.state.arr.push(newItem)
    this.setState({ arr: [...this.state.arr, newItem] });

  }

  removeMore(e, i) {
    e.preventDefault();
    let removeItem = [...this.state.arr]
    removeItem.splice(i, 1);
    this.state.arr = removeItem;
    this.setState(this.state)
    console.log(this.state);
    console.log(i, "count")
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {

    return (
      <>

        <form>
          <div className="Resume">
            <header id="Resume-header" className="Resume-header">
              <h1>Education Details</h1>



              <div>
                <button type="button" onClick={() => this.addMore()}>+</button>
                {this.state.arr.map((data, i) => {
                  return (<div key={i}>
                    <div>
                      <label><b>Degree</b></label>
                    </div>
                    <div>
                      <input onChange={(e) => this.detail(e, i)} type="text" name="degree" value={data.degree}></input>
                      <span>{this.props.val}</span>
                    </div>
                    <div>
                      <label><b>Degree Name</b></label>
                    </div>
                    <div>
                      <input onChange={(e) => this.detail(e, i)} type="text" name="deg_name" value={data.deg_name} ></input>
                      <span>{this.props.val}</span>

                    </div>
                    {i !== 0 && <button onClick={(e) => this.removeMore(e, i)}>-</button>}
                  </div>
                  )
                }
                )}

              </div>
            </header>
          </div>
        </form>

      </>
    )
  }
}

export default Step2;