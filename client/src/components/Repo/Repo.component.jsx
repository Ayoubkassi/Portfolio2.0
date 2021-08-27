import React from 'react'
import { Title , Main , Container } from './Repo.styles';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import './Repo.styles.css';


const columns = [
  { field: 'name', headerName: 'Title', width: 180 },
  {
    field: 'description',
    headerName: 'Description',
    width: 257,
    editable: true,
  },
  {
    field: 'language',
    headerName: 'Language',
    width: 140,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: 'Created at',
    width: 150,
    editable: true,
  },
  {
    field: 'forks',
    headerName: 'Forks',
    width: 80,
    editable: true,
  },
  {
    field: 'issues',
    headerName: 'Issues',
    width: 80,
    editable: true,
  },
  {
    field: 'size',
    headerName: 'Size (kb)',
    width: 110,
    editable: true,
  },
  {
    field: 'stars',
    headerName: 'Stars',
    description: 'This column has the value of each project',
    sortable: false,
    width: 80,
  },
];






const Repo = ({projects}) => {
  console.log(projects);
  return (
    <Main>
      <Container>
      <Title>Software Repository</Title>
      <div style={{ height: 740, width: '100%', paddingBottom: "70px",paddingTop: "10px" }}>
      <DataGrid
        rows={projects}
        columns={columns}
        pageSize={10}
        //checkboxSelection
        //disableSelectionOnClick
        style= {{color: '#212529' ,     fontSize: '0.8rem',
        fontWeight: '400',
        lineHeight: '1.5' }}
      />
      </div>
    {/*  <table className="table" style={{ paddingBottom: "100px",paddingTop: "60px", marginBottom: "50px"}}>
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
            <tr  key={project.id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.language}</td>
              <td>{project.size}</td>
            </tr>
          ))
        }*/}

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

      {/*  </tbody>

      </table>*/}
      </Container>
    </Main>
  )
}

const mapStateToProps = state => ({
  projects : state.project.projects
})

export default connect(mapStateToProps)(Repo);
