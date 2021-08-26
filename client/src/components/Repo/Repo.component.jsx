import React from 'react'
import { Title , Main , Container } from './Repo.styles';
import { connect } from 'react-redux';

const Repo = ({projects}) => {
  projects =projects.slice(20,30);
  return (
    <Main>
      <Container>
      <Title>Software Repository</Title>
      <table className="table" style={{ paddingBottom: "100px",paddingTop: "60px", marginBottom: "50px"}}>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Language</th>
            <th scope="col">Size(kb)</th>
          </tr>
        </thead>
        <tbody>
        {
          projects.map((project)=>(
            <tr>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.language}</td>
              <td>{project.size}</td>
            </tr>
          ))
        }
        {/*  <tr>
            <td>Video Editing Automation</td>
            <td>Toolkit of algorithms to automate the video editing process</td>
            <td>C</td>
          </tr>
          <tr>
            <td>LED Music Visualizer</td>
            <td>Create a realtime LED audio waveform based on the pitch and volume with Arduino</td>
            <td>C++</td>
          </tr>
          <tr>
            <td>Timelapse Auto Ramp Photoshop Plugin</td>
            <td>Analyze RAW images from a timelapse, and auto - ramp the exposure for manual changes of camera settings. The best way to achieve amazing results in difficult lighting.</td>
            <td>Java</td>
          </tr> */}

        </tbody>

      </table>
      </Container>
    </Main>
  )
}

const mapStateToProps = state => ({
  projects : state.project.projects
})

export default connect(mapStateToProps)(Repo);
