import{e as o}from"../../../../_chunks/chunk-V56BTN3W.js";import{a as e}from"../../../../_chunks/chunk-3DSTO3K3.js";import{a as n,b as a,e as u,f as c}from"../../../../_chunks/chunk-RK3EK3FG.js";var m=a(u(),1),i=a(c(),1);$(function(){new t($("#SignUpPanel"))});var t=class extends m.PropertyPanel{constructor(l){super(l);this.form=new o(this.idPrefix),this.form.ConfirmEmail.addValidationRule(this.uniqueName,r=>{if(this.form.ConfirmEmail.value!==this.form.Email.value)return e.Validation.EmailConfirm}),this.form.ConfirmPassword.addValidationRule(this.uniqueName,r=>{if(this.form.ConfirmPassword.value!==this.form.Password.value)return(0,i.localText)("Validation.PasswordConfirm")}),this.byId("SubmitButton").click(r=>{r.preventDefault(),this.validateForm()&&(0,i.serviceCall)({url:(0,i.resolveUrl)("~/Account/SignUp"),request:{DisplayName:this.form.DisplayName.value,Email:this.form.Email.value,Password:this.form.Password.value},onSuccess:s=>{if(s.DemoActivationLink){(0,i.information)(`You would normally receive an e-mail with instructions to active your account now.

But as this is a DEMO, you'll be redirected to the activation page automatically. `,()=>{window.location.href=(0,i.resolveUrl)(s.DemoActivationLink)});return}(0,i.information)(e.Forms.Membership.SignUp.Success,()=>{window.location.href=(0,i.resolveUrl)("~/")})}})})}getFormKey(){return o.formKey}getTemplate(){return`<h2 class="text-center p-4">
        <img src="${(0,i.resolveUrl)("~/Content/site/images/serenity-logo-w-128.png")}"
            class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
            width="50" height="50" /> serene
    </h2>

    <div class="s-Panel p-4">

        <h5 class="text-center my-4">${(0,i.htmlEncode)(e.Forms.Membership.SignUp.FormTitle)}</h5>
        <p class="text-center">${(0,i.htmlEncode)(e.Forms.Membership.SignUp.FormInfo)}</p>

        <form id="~_Form" action="">
            <div id="~_PropertyGrid"></div>
            <div class="px-field">
                <button id="~_SubmitButton" type="submit" class="btn btn-primary my-4 w-100">
                    ${(0,i.htmlEncode)(e.Forms.Membership.SignUp.SubmitButton)}
                </button>
            </div>
        </form>
    </div>`}};n(t,"SignUpPanel");
//# sourceMappingURL=SignUpPage.js.map
