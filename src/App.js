import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';
import './App.css';

var notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

var scales = [
    { id: "major", name: "Major Scale", pattern: [2, 2, 1, 2, 2, 2, 1], intervals: ["1", "2", "3", "4", "5", "6", "7", "8"] },
    { id: "natural_minor", name: "Natural Minor Scale", pattern: [2, 1, 2, 2, 1, 2, 2], intervals: ["1", "2", "b3", "4", "5", "b6", "b7", "8"] },
    { id: "harmonic_minor", name: "Harmonic Minor Scale", pattern: [2, 1, 2, 2, 1, 3, 1], intervals: ["1", "2", "b3", "4", "5", "b6", "7", "8"] },
    { id: "melodic_minor", name: "Melodic Minor Scale", pattern: [2, 1, 2, 2, 2, 2, 1], intervals: ["1", "2", "b3", "4", "5", "6", "7", "8"] },
    { id: "pentatonic_major", name: "Pentatonic Major Scale", pattern: [2, 2, 3, 2, 3], intervals: ["1", "2", "3", "5", "6", "8"] },
    { id: "pentatonic_minor", name: "Pentatonic Minor Scale", pattern: [3, 2, 2, 3, 2], intervals: ["1", "b3", "4", "5", "b7", "8"] },
    { id: "blues", name: "Blues Scale", pattern: [3, 2, 1, 1, 3, 2], intervals: ["1", "2", "b3", "4", "b5", "6", "b7", "8"] }
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
    
    getNotes(rootNote, scale) {
        var scaleNotes = [];
        var scalePattern = scale.pattern;
        var index = notes.indexOf(rootNote);
        for (var i = 0; i <= scalePattern.length; i++) {
            
            if (index >= notes.length) {
                index -= notes.length;
            }
            scaleNotes.push(notes[index]);
            index += scalePattern[i];
        }
        return scaleNotes;
    }

    render() {
        let scaleNotes = this.getNotes(this.props.rootNote, this.props.scale);
        return (
            <div className="scale">
                {scaleNotes.map((value, index) => {
                    return (
                        <div className="notebox">
                            <strong>{this.props.scale.intervals[index]}</strong><br/>
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
