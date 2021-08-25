import React from 'react'
import { Title , Main , Container } from './Repo.styles';

const Repo = (props) => {
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
          </tr>
        </thead>
        <tbody>
          <tr>
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
          </tr>
        </tbody>

      </table>
      </Container>
    </Main>
  )
}

export default Repo;