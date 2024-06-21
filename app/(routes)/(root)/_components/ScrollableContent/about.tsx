export const About = () => {
    return (
        <div className="font-raleway h-full w-full bg-neutral-100 px-6 py-8 lg:px-12 lg:py-14">
            <div className="flex h-full w-full flex-col justify-evenly space-y-4">
                <Heading />
                <Content />
            </div>
        </div>
    );
};

const Heading = () => {
    return (
        <div className="space-y-2">
            <h2 className="text-4xl font-semibold">About me</h2>
            <p className="font-poppins text-lg font-medium lg:text-xl">
                I thrive on empowering individuals through training and holistic
                development. As an ex-NCC Air Wing Cadet, I bring discipline and
                a strong sense of commitment to everything I do. My dedication
                to helping people achieve growth and success in both their
                personal and professional lives.
            </p>
        </div>
    );
};

const Content = () => {
    return (
        <div className="space-y-4">
            <Personal />
            <Professional />
        </div>
    );
};

const Personal = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold">Personal</h3>
            <p className="font-poppins text-neutral-800">
                My passion for pet care, graphic design, and occult science
                enriches my approach to life and work. Helping others is at the
                heart of what I do, and this drives my career choices, allowing
                me to grow both personally and in my field. With an optimistic
                outlook and an ambivert personality, I cherish meaningful
                connections and enjoy the company of others. My dedication to my
                work and those I serve makes me a trusted and respected
                figure in my field.
            </p>
        </div>
    );
};

const Professional = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold">Professional</h3>
            <p className="font-poppins text-neutral-800">
                Specializing as a Posh trainer, self-defense instructor,
                menstrual hygiene advocate, and a public speaker, engaging
                audiences with impactful topics. Conducting workshops and
                training sessions, I strive to create a positive and safe
                environment for everyone.My approach is marked by high
                professionalism and a commitment to delivering work with utmost
                precision and care.
            </p>
        </div>
    );
};
