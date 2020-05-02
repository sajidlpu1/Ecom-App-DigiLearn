import React from 'react'

export default function Team() {
    return (
        <div className="row my-3">
        <div className="col-10 col-sm-10 mx-auto">
        <div class="card-group">
        <div class="card">
          <img src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="face3"/>
          <div class="card-body">
            <h5 class="card-title">Charlie</h5>
            <p class="card-text">CTO</p>
            <p class="card-text"><small class="text-muted">Last updated 6 years ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://images.pexels.com/photos/2092574/pexels-photo-2092574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="face2"/>
          <div class="card-body">
            <h5 class="card-title">Chaitu and Ritz</h5>
            <p class="card-text">Product Managers</p>
            <p class="card-text"><small class="text-muted">Last updated 2 years ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" class="card-img-top" alt="face3"/>
          <div class="card-body">
            <h5 class="card-title">Kareena</h5>
            <p class="card-text">Team Manager</p>
            <p class="card-text"><small class="text-muted">Last updated 4 years ago</small></p>
          </div>
        </div>
      </div>
        </div>
        </div>
    )
}
