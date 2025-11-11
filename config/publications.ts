export type Publications = typeof publications;

export const publications = {
  preprints: [
    {
      name: "Poisson Flow Consistency Training",
      time: "23 October, 2025",
      description: `A research project started with the assistance of the Math, Science, and Technology Center at 
        Paul Laurence Dunbar High School. Developed training algorithms for the Poisson Flow Consistency Model, 
        allowing the model to be trained in isolation. Following the theory of optimizing Consistency Training
        techniques, introduced task-specific optimizations for Low-Dose Computed Tomography denoising. Using
        Learned Perceptual Image Patch Quality, improved the LDCT images by up to 76%, and improvements are also
        shown using the Structural Similarity Index and Peak Signal-to-Noise Ratio. With more efficient training,
        maintained competitive results with other Consistency Models, with opportunity for future optimization`,
      citation:
        "Zhang, A., Gokmen, M., Hein, D., Ge, R., Xia, W., Wang, G., & Chen, J. (2025). Poisson Flow Consistency Training. arXiv preprint arXiv:2510.21857.",
      link: "https://arxiv.org/abs/2510.21857",
    },
  ],
  publications: [],
};
