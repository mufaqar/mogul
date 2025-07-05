'use client'
import ComponentContainerCard from '@/components/ComponentContainerCard'
import ChoicesFormInput from '@/components/from/ChoicesFormInput'
import TextAreaFormInput from '@/components/from/TextAreaFormInput'
import TextFormInput from '@/components/from/TextFormInput'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormCheck, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const PropertyAdd = () => {
  const messageSchema = yup.object({
    name: yup.string().required('Please enter name'),
    property_bedroom: yup.string().required('Please enter property_bedroom'),
     bathroom: yup.string().required('Please enter property_bedroom'),
    description: yup.string().required('Please enter description'),
    zipCode: yup.string().required('Please enter Zip-Code'),
  })

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(messageSchema),
  })
  return (
    <>
      <form onSubmit={handleSubmit(() => {})}>
        <Card>
          <CardHeader>
            <CardTitle as={'h4'}>Basic Information</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={4}>
                <label htmlFor="property-categories" className="form-label">
                  Parking Type
                </label>
                <ChoicesFormInput className="form-control" id="property-categories" data-choices data-choices-groups data-placeholder="Parking Type">
                  <option value="Villas">Garage</option>
                  <option value="Residences">Residences</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Penthouse">Penthouse</option>
                </ChoicesFormInput>
              </Col>
              <Col lg={4}>
                <label htmlFor="property_bedroom" className="form-label">
                  Bedroom
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text fs-20">
                    <IconifyIcon icon="solar:bed-broken" className="align-middle" />
                  </span>
                  <input type="number" id="property_bedroom" className="form-control" />
                </div>
              </Col>
              <Col lg={4}>
                <label htmlFor="bathroom" className="form-label">
                  Bathroom
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text fs-20">
                    <IconifyIcon icon="solar:bath-broken" className="align-middle" />
                  </span>
                  <input type="number" id="bathroom" className="form-control" />
                </div>
              </Col>
              <Col lg={4}>
                <label htmlFor="property-price" className="form-label">
                  Rent Amount ( Monthly)
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text fs-20 px-2 py-0">
                    <IconifyIcon icon="ri:money-dollar-circle-line" />
                  </span>
                  <input type="number" id="property-price" className="form-control" placeholder={'000'} />
                </div>
              </Col>
              <Col lg={4}>
                <label htmlFor="property-price" className="form-label">
                  Security Deposit
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text fs-20 px-2 py-0">
                    <IconifyIcon icon="ri:money-dollar-circle-line" />
                  </span>
                  <input type="number" id="property-price" className="form-control" placeholder={'000'} />
                </div>
              </Col>
              <Col lg={4}>
                <label htmlFor="property-price" className="form-label">
                  Date Available
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text fs-20 px-2 py-0">
                    <IconifyIcon icon="ri:money-dollar-circle-line" />
                  </span>
                  <input type="number" id="property-price" className="form-control" placeholder={'000'} />
                </div>
              </Col>
              <Col lg={4}>
                <label htmlFor="property-for" className="form-label">
                  Lease Duration
                </label>
                <ChoicesFormInput className="form-control" id="property-for" data-choices data-choices-groups data-placeholder="Select Duration">
                  <option value="Sale">1 Year</option>
                  <option value="Rent">2 Year</option>
                  <option value="Other">3 Year</option>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <label htmlFor="property-price" className="form-label">
                  Price
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text fs-20 px-2 py-0">
                    <IconifyIcon icon="ri:money-dollar-circle-line" />
                  </span>
                  <input type="number" id="property-price" className="form-control" placeholder={'000'} />
                </div>
              </Col>

              <Col lg={4}>
                <label htmlFor="property-square-foot" className="form-label">
                  Square Foot
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text fs-20">
                    <IconifyIcon icon="solar:scale-broken" className="align-middle" />
                  </span>
                  <input type="number" id="property-square-foot" className="form-control" />
                </div>
              </Col>

              <Col lg={12}>
                <div className="mb-3">
                  <TextAreaFormInput
                    control={control}
                    name="description"
                    type="text"
                    label="Property Address"
                    className="form-control"
                    id="schedule-textarea"
                    rows={3}
                    placeholder="Enter address"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div className="mb-3">
                  <TextFormInput control={control} name="zipCode" type="number" placeholder="zip-code" label="Zip-Code" />
                </div>
              </Col>
              <Col lg={4}>
                <label htmlFor="choices-city" className="form-label">
                  City
                </label>
                <ChoicesFormInput className="form-control" id="choices-city" data-choices data-choices-groups data-placeholder="Select City">
                  <option>Choose a city</option>
                  <optgroup label="UK">
                    <option value="London">London</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Liverpool">Liverpool</option>
                  </optgroup>
                  <optgroup label="FR">
                    <option value="Paris">Paris</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Marseille">Marseille</option>
                  </optgroup>
                  <optgroup label="DE" disabled>
                    <option value="Hamburg">Hamburg</option>
                    <option value="Munich">Munich</option>
                    <option value="Berlin">Berlin</option>
                  </optgroup>
                  <optgroup label="US">
                    <option value="New York">New York</option>
                    <option value="Washington" disabled>
                      Washington
                    </option>
                    <option value="Michigan">Michigan</option>
                  </optgroup>
                  <optgroup label="SP">
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Malaga">Malaga</option>
                  </optgroup>
                  <optgroup label="CA">
                    <option value="Montreal">Montreal</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Vancouver">Vancouver</option>
                  </optgroup>
                </ChoicesFormInput>
              </Col>
              <Col lg={4}>
                <label htmlFor="choices-country" className="form-label">
                  Country
                </label>
                <ChoicesFormInput className="form-control" id="choices-country" data-choices data-choices-groups data-placeholder="Select Country">
                  <option>Choose a country</option>
                  <optgroup>
                    <option>United Kingdom</option>
                    <option value="Fran">France</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="U.S.A">U.S.A</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="Spain">Spain</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                  </optgroup>
                </ChoicesFormInput>
              </Col>

              <Col lg={4}>
                <ComponentContainerCard id="inline-radio" title="Pets" titleClass="mb-3">
                  <FormCheck type="radio" name="radio2" label="No Pets Allowed" id="flexRadioDefault3" inline />
                  <FormCheck type="radio" name="radio2" label="Pets Allowed" id="flexRadioDefault4" inline />
                </ComponentContainerCard>
              </Col>
              <Row>
                <Col lg={12}>
                  <label htmlFor="property-square-foot" className="form-label my-2">
                    Select Amenity
                  </label>
                  <ChoicesFormInput options={{ removeItemButton: true }} multiple>
                    <option value="Wheelchair Accessible">Wheelchair Accessible</option>
                    <option value="Balcony">Balcony</option>
                    <option value="Central Air">Central Air</option>
                    <option value="Central Heat">Central Heat</option>
                    <option value="Deck">Deck</option>
                    <option value="Dishwasher">Dishwasher</option>
                    <option value="Hardwood Floors">Hardwood Floors</option>
                    <option value="Pool">Pool</option>
                    <option value="Stainless Steel Appliance">Stainless Steel Appliance</option>
                    <option value="In-Unit Laundry">In-Unit Laundry</option>
                    <option value="Yard">Yard</option>
                    <option value="Add Amenity">Add Amenity</option>
                  </ChoicesFormInput>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <label htmlFor="property-square-foot" className="form-label  my-2">
                    Select Utility
                  </label>
                  <ChoicesFormInput options={{ removeItemButton: true }} multiple>
                    <option value="A/C">A/C</option>
                    <option value="Cable">Cable</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Gas">Gas</option>
                    <option value="Heat">Heat</option>
                    <option value="Internet">Internet</option>
                  </ChoicesFormInput>
                </Col>
              </Row>
            </Row>

            <Row className="mt-3">
              <Col lg={6}>
                <div className="mb-3">
                  <TextFormInput control={control} name="name" placeholder="Test Tanant" label="Display Name" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mb-3">
                  <TextFormInput control={control} name="name" placeholder="(415) 340-2545" label="Display  Phone" />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <TextFormInput control={control} name="name" placeholder="Name" label="Title" />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-3">
                  <TextAreaFormInput
                    control={control}
                    name="description"
                    type="text"
                    label="Property Address"
                    className="form-control"
                    id="schedule-textarea"
                    rows={3}
                    placeholder="Enter address"
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <div className="mb-3 rounded">
          <Row className="justify-content-end g-2">
            <Col lg={2}>
              <Button variant="outline-primary" type="submit" className="w-100">
                Create Property
              </Button>
            </Col>
            <Col lg={2}>
              <Button variant="danger" className="w-100">
                Cancel
              </Button>
            </Col>
          </Row>
        </div>
      </form>
    </>
  )
}

export default PropertyAdd
