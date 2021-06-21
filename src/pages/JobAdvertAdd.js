import React, {  useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Button, Dropdown, Checkbox, TextArea, Form, FormField, Input } from "semantic-ui-react";
import CitySercive from "../services/cityService";
import WorkTimeService from "../services/workTimeService";
import WorkPlaceService from "../services/workPlaceService";
import JobAdvertService from '../services/jobAdvertService';
import JobPositionService from "../services/jobPositionService";
import { useHistory } from "react-router-dom";

export default function JobAdvertAdd() {
    let jobAdvertService = new JobAdvertService();
    const JobAdvertView = Yup.object().shape({
        description: Yup.string().required("Bu alan boş geçilemez."),
        jobPositionId: Yup.string().required("Bu alan boş geçilemez."),
        workTimeId: Yup.string().required("Bu alan boş geçilemez."),
        workPlaceId: Yup.string().required("Bu alan boş geçilemez."),
        openPositions: Yup.string().required("Bu alan boş geçilemez.").min(1, "Pozisyon sayısı 1 ve daha fazla olmalıdır."),
        cityId: Yup.string().required("Bu alan boş geçilemez."),
        minSalary: Yup.number().min(0, "0 ve üstü olmalıdır.").required("Bu alan boş geçilemez."),
        maxSalary: Yup.number().min(0, "0 ve üstü olmalıdır.").required("Bu alan boş geçilemez."),
        lastDate: Yup.date().nullable().required("Bu alan boş geçilemez."),

    });
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            description: "",
            jobPositionId: "",
            workTimeId: "",
            workPlaceId: "",
            openPositions: "",
            cityId: "",
            minSalary: "",
            maxSalary: "",
            lastDate: "",
        },
        validationSchema: JobAdvertView,
        onSubmit: (values) => {
            values.employerId = 30;
            jobAdvertService.addJobAdvert(values).then((result) => console.log(result.data.data));
            alert("İş ilanı başarıyla eklenmiştir.")
            history.push("/jobadvert")

        },

    });
    const [workTimes, setWorkTimes] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let workTimeService = new WorkTimeService();
        let workPlaceService = new WorkPlaceService();
        let cityService = new CitySercive();
        let jobPositionService = new JobPositionService();

        workTimeService.getWorkTimes().then((result) => setWorkTimes(result.data.data));
        workPlaceService.getWorkPlaces().then((result) => setWorkPlaces(result.data.data));
        cityService.getCities().then((result) => setCities(result.data.data));
        jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));


    }, []);

    const workTimeOption = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.name,
        values: workTime.id,
    }));

    const workPlaceOption = workPlaces.map((workPlace, index) => ({
        key: index,
        text: workPlace.name,
        values: workPlace.id,
    }));
    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        values: city.id,
    }));
    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.position,
        values: jobPosition.id,
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }



    return (
        <div>

            <h1 className="h1">İlan Oluştur</h1>
<hr></hr>
<br></br>
            <Form onSubmit={formik.handleSubmit} >
                <Form.Group widths='equal' >
                    <Form.Field
                        style={{ marginBottom: "1rem" }}
                    >
                        <label>İş Pozisyonu</label>
                        <Dropdown

                            item
                            clearable
                            placeholder="İş Pozisyonu"
                            search
                            selection
                            onChange={(event, data) =>
                                handleChangeSemantic(data.value, "jobPositionId")
                            }
                            onBlur={formik.onBlur}
                            id="jobPositionId"
                            value={formik.values.jobPositionId}
                            options={jobPositionOption}
                        />
                        {formik.errors.jobPositionId && formik.touched.jobPositionId && (

                            <div className={"ui pointing red basic label"}>
                                {formik.errors.jobPositionId}
                            </div>
                        )}
                    </Form.Field>

                    <Form.Field>
                        <label>Şehir</label>


                        <Dropdown
                            clearable
                            item
                            placeholder="Şehir"
                            search
                            selection

                            onChange={(event, data) =>
                                handleChangeSemantic(data.value, "cityId")
                            }
                            onBlur={formik.onBlur}
                            id="cityId"
                            value={formik.values.cityId}
                            options={cityOption}
                        />
                        {formik.errors.cityId && formik.touched.cityId && (

                            <div className={"ui pointing red basic label"}>
                                {formik.errors.cityId}
                            </div>
                        )}




                    </Form.Field>


                    <Form.Field>
                        <label>Çalışma Yeri</label>

                        <Dropdown
                            clearable
                            item
                            placeholder="Çalışma Yeri"
                            search
                            selection
                            onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workPlaceId")
                  }
                            onBlur={formik.onBlur}
                            id="workPlaceId"
                            value={formik.values.workPlaceId}
                            options={workPlaceOption}
                        />
                        {formik.errors.workPlaceId && formik.touched.workPlaceId && (

                            <div className={"ui pointing red basic label"}>
                                {formik.errors.workPlaceId}
                            </div>
                        )}



                    </Form.Field>

                    <FormField>
                        <label>Çalışma Süresi</label>
                        <Dropdown
                            clearable
                            item
                            placeholder="Çalışma Süresi"
                            search
                            selection
                            onChange={(event, data) =>

                                handleChangeSemantic(data.value, "workTimeId")
                            }
                            onBlur={formik.values.workTimeId}

                            id="workTimeId"
                            value={formik.values.workTimeId}
                            options={workTimeOption}

                        />

                        {formik.errors.workTimeId && formik.touched.workTimeId && (

                            <div className={"ui pointing red basic label"}>{formik.errors.workTimeId} </div>
                        )}





                    </FormField>
                </Form.Group>
                <Form.Group>
                    <FormField >

                        <label >Minimum Maaş:</label>

                        <Input

                            type="number"
                            placeholder="Minimum Maaş"
                            value={formik.values.minSalary}
                            name="minSalary"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        >

                        </Input>
                        {formik.errors.minSalary && formik.touched.minSalary && (

                            <div className={"ui pointing red basic label"}>{formik.errors.minSalary}</div>
                        )}





                    </FormField>

                    <FormField>
                        <label>Maksimum Maaş</label>

                        <Input
                            type="number"
                            placeholder="Maksimum Maaş"
                            value={formik.values.maxSalary}
                            name="maxSalary"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        ></Input>
                        {formik.errors.maxSalary && formik.touched.maxSalary && (

                            <div className={"ui pointing red basic label"}>{formik.errors.maxSalary}</div>
                        )}
                    </FormField>
                    <FormField>
                        <label>Açık Pozisyon:</label>
                        <Input
                            id="openPositions"
                            name="openPositions"
                            error={Boolean(formik.errors.openPositions)}
                            onChange={formik.handleChange}
                            value={formik.values.openPositions}
                            onBlur={formik.handleBlur}
                            type="number"
                            placeholder="Açık Pozisyon"

                        />
                        {formik.errors.openPositions && formik.touched.openPositions && (
                            <div className={"ui pointing red basic label"}>{formik.errors.openPositions}</div>

                        )}
                    </FormField>

                    <FormField>
                        <label>Son Başvuru Tarihi</label>
                        <Input
                            type="date"
                            error={Boolean(formik.errors.lastDate)}
                            onChange={(event, data) =>

                                handleChangeSemantic(data.value, "lastDate")
                            }
                            value={formik.values.lastDate}
                            onBlur={formik.handleBlur}
                            name="lastDate"
                            placeholder="Son Başvuru tarihi"

                        />
                        {formik.errors.lastDate && formik.touched.lastDate && (

                            <div className={"ui pointing red basic label"}>{formik.errors.lastDate}</div>
                        )}


                    </FormField>
                </Form.Group>
                <Form.Group widths='equal'>
                    <FormField>
                        <label>Açıklama</label>
                        <TextArea
                            placeholder="Açıklama"
                            style={{ minHeight: 100 }}


                            error={Boolean(formik.errors.description).toString()}
                            name="description"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                        {formik.errors.description && formik.touched.description && (
                            <div className={"ui pointing red basic label"}>{formik.error}  </div>
                        )}
                    </FormField>

                </Form.Group>




                <Form.Field
                    control={Checkbox}
                    label='İlanın herkese açık olacağını kabul ediyorum.'
                />

                <Form.Field >
                    <Button
                        content="Oluştur"
                        labelPosition="left"
                        icon="add"
                        positive
                        type="submit"

                    >


                    </Button>
                </Form.Field>
            </Form>






        </div>

    )
}
