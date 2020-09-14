import React, { Component } from 'react';
import './App.css';

var notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

const MAJOR_SCALE = [0, 2, 2, 1, 2, 2, 2, 1];
const MINOR_SCALE = [0, 2, 1, 2, 2, 1, 2, 1];
const BLUES_SCALE = [0, 3, 2, 1, 1, 3, 2];
const JAZZ_SCALE = [0, 3, 2, 1, 1, 3, 2];
const PENTATONIC_MINOR_SCALE = [0, 3, 2, 2, 3, 2];
const PENTATONIC_MAJOR_SCALE = [0, 2, 2, 3, 2, 3];

var scales = [
    { id: "major", name: "Major Scale", pattern: MAJOR_SCALE },
    { id: "minor", name: "Minor Scale", pattern: MINOR_SCALE },
    { id: "pentatonic_major", name: "Pentatonic Major Scale", pattern: PENTATONIC_MAJOR_SCALE },
    { id: "pentatonic_minor", name: "Pentatonic Minor Scale", pattern: PENTATONIC_MINOR_SCALE },
    { id: "blues", name: "Blues Scale", pattern: BLUES_SCALE },
    { id: "jazz", name: "Jazz Scale", pattern: JAZZ_SCALE },
];

class KeyMaster extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rootNote: "C",
            scale: scales.find(x => x.id === "major")
        };        
    }
    
    setRootNote(newNote) {
        this.setState({
            rootNote: newNote,
        });
    }
    setScale(newScale) {
        this.setState({
            scale: scales.find(x => x.id === newScale)
        });
    }

    render() {
        return (
            <div className="KeyMaster">
                <header className="App-header">
                    <div className="rootNotes">
                        {
                            notes.map((value) => {
                                var className = value === this.state.rootNote ? "active" : "";
                                if (value.length >= 2) {
                                    className += " sharpflat";
                                }
                                return (
                                    <button className={className} onClick={() => this.setRootNote(value)} key={value}>{value}</button>
                                )
                            })
                        }
                    </div>
                    <div className="scalesList">
                        {
                            scales.map((x) => {
                                return (
                                    <button className={x.id === this.state.scale.id ? "active" : ""} onClick={() => this.setScale(x.id)} key={x.id}>{x.name}</button>
                                )
                            })
                        }
                        
                    </div>
                </header>
                <div className="App-body">
                    <h1>{this.state.rootNote} {this.state.scale.name}</h1>
                    <Scale
                        rootNote={this.state.rootNote}
                        scale={this.state.scale}
                    />
                </div>
            </div>
        );
    }
}

class Scale extends Component {
    
    getNotes(rootNote, scalePattern) {
        var scaleNotes = [];
        var index = notes.indexOf(rootNote);
        for (var i = 0; i < scalePattern.length; i++) {
            index += scalePattern[i];
            if (index >= notes.length) {
                index -= notes.length;
            }
            scaleNotes.push(notes[index]);
        }
        return scaleNotes;
    }

    render() {
        let scaleNotes = this.getNotes(this.props.rootNote, this.props.scale.pattern);
        return (
            <div className="scale">
                {scaleNotes.map((value, index) => {
                    return (
                        <div className="notebox" key={index}>
                            <strong>{index+1}</strong><br/>
                            <div className="note">{value}</div>
                        </div>
                    )
                })}
            </div>
        )
        
    }
}


function App() {
  return (
      <div className="App">
          <KeyMaster />
    </div>
  );
}

export default App;
