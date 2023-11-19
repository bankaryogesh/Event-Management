import { Route, Routes } from "react-router-dom";
import UserLogin from "./components/user/user-login/user-login.component";
// import { EventCategoryForm } from "./components/admin/event-category/event-category-form/event-category-form.component";
import { Home } from "./components/home/home.component";
import { UserRegistrationPage } from "./components/user/user-registration/user.registration.component";
import { ImageGallery } from "./components/admin/gallery/gallery.component";
import { AnniversaryEvent } from "./components/user/event-category/anniversary-event/anniversary-event-form.component";
import { BirthdayEvent } from "./components/user/event-category/birthday-event/birthday-event-form.component";
import { WeddingEvent } from "./components/user/event-category/wedding-event/wedding-event-form.component";



export function AppRouter(){
    return(
        <Routes>
             <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user/event-catagory/birthday-event" element={<BirthdayEvent></BirthdayEvent>}></Route>
            <Route path="/user/event-catagory/anniversary-event" element={<AnniversaryEvent></AnniversaryEvent>}></Route>
            <Route path="/user/event-catagory/wedding-event" element={<WeddingEvent></WeddingEvent>}></Route>
            <Route path="/admin/event/gallery" element={<ImageGallery></ImageGallery>}></Route>
            <Route path="/user/user-registration/user-registration" element={<UserRegistrationPage></UserRegistrationPage>}></Route>
            <Route path="/user/user-login/userlogin" element={<UserLogin></UserLogin>}></Route>
        </Routes>
    )
}