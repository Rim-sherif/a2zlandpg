import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


export default function NavTabs() {
  const [key, setKey] = useState("home");
  return (
    <>
  <div class="col-md-12">
            <div id="navigation-tab">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center tab-nav"
              >
                <Tab eventKey="home" title="ALLfurnture" className="text-dark">
                <div class="row">
										<div class="col-md-12">
                     
										</div>
									</div>
                </Tab>
                <Tab eventKey="Bedrooms" title="Bedrooms" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											
										</div>
									</div>
                </Tab>
                <Tab eventKey="Floors" title="Floors" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											
										</div>
									</div>
                </Tab>
                <Tab eventKey="Kitchens" title="Kitchens" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											
										</div>
									</div>
                </Tab>
                <Tab eventKey="Bathrooms" title="Bathrooms" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											
										</div>
									</div>
                </Tab>
                <Tab eventKey="Salon" title="Salon" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											
										</div>
									</div>
                </Tab>
                <Tab eventKey="Home Office" title="Home Office" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											
										</div>
									</div>
                </Tab>
                <Tab eventKey="Dining room" title="Dining room" className=" text-dark">
                <div class="row">
										<div class="col-md-12">
											
										</div>
									</div>
                </Tab>
               
                </Tabs>
  </div>
</div>
    </>
  );
}
