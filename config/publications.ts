export type Publications = typeof publications;

export const publications = {
  research: [
    {
      name: "Poisson Flow Consistency Training",
      time: "23 October, 2025",
      description: `Generative AI has shown great potential in unconditional and conditional image generation. 
        PFCT introduces new training algorithms for the Poisson Flow Consistency Model, a Consistency-Style model 
        based on the Poisson Flow Generative Model, allowing it to be trained in isolation. Following the theory of 
        optimizing Consistency Training techniques, PFCT introduced task-specific optimizations for Low-Dose Computed 
        Tomography denoising. Using Learned Perceptual Image Patch Quality, PFCT improved LDCT image quality up to 76%, and
        improvements are also shown using the Structural Similarity Index and Peak Signal-to-Noise Ratio. 
        With more efficient training, PFCT maintained competitive results with other Consistency Models, 
        with opportunity for future optimization.

        A research project started with the assistance of the Math, Science, and Technology Center at 
        Paul Laurence Dunbar High School`,
      citation:
        "Zhang, A., Gokmen, M., Hein, D., Ge, R., Xia, W., Wang, G., & Chen, J. (2025). Poisson Flow Consistency Training. arXiv preprint arXiv:2510.21857.",
      link: "https://arxiv.org/abs/2510.21857",
    },
    {
      name: "Enhancing Cardiac CT Image Quality in Obese Patients through Deep Learning Denoising",
      time: "21 July, 2024",
      description: `Cardiovascular disease (CVD) is a leading cause of death in the US, with obesity significantly
      elevating the risk of developing CVD. Computed tomography is vital in diagnosing CVD, but cardiac CT images
      of bariatric patients tend to suffer from higher image noise. This study analyzed the effectiveness of
      the deep learning based denoising software, Pixelshine, against standard CT image reconstruction methods
      (Filtered Back Projection & Iterative Reconstruction). With a cohort of 11 patients, the PixelShine images
      were most similar to IR3 in terms of Peak Signal-to-Noise ratio & Root Mean Square Error and IR5 in terms of
      Structural Similarity Index. This analysis demonstrates how Deep Learning Denoising can significantly improve
      the image quality of CT images with comparable quality to iterative reconstruction.`,
      citation:
        "Zhang, A. Z., Biondi, N. L., Sheets, E. S., Leung, S. W., & Zhang, J. (2024, July). Enhancing Cardiac CT Image Quality in Obese Patients through Deep Learning Denoising. In AAPM 66th Annual Meeting & Exhibition. AAPM.",
      link: "https://aapm.confex.com/aapm/2024am/meetingapp.cgi/Paper/10476",
    },
  ],
};
