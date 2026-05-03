---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

## Welcome to My Homepage

I received my M.Sc. in [Computer Science](https://www.csd.uwo.ca/) from [Western University](https://www.uwo.ca/) under the supervision of [Prof. Pingzhao Hu](https://phulab.org/). 

During my M.Sc., I published **three first-author papers at NeurIPS, ICLR, and ICML** on structure-grounded multimodal reasoning.

I am seeking RA and PhD opportunities in world models, agents, multimodal reasoning, and post-training. [[See My CV Here]](/pdfs/Zihao_s_CV.pdf)

<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Selected Publications
🎓 Top-Tier Conferences During My Master's

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='images/archs/on_going.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can LLMs reason over structure at scale?**

[Scaling-Aware Adapter for Structure-Grounded LLM Reasoning](https://arxiv.org/pdf/2602.02780) [**[Code]**](https://github.com/zihao-jing/EntroAdap) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Qiuhao Zeng, Ruiyi Fang, Yan Yi Li, Yan Sun, Boyu Wang, Pingzhao Hu

Proposed scaling-aware patching and a geometry-grounding adapter for structure-grounded LLM reasoning over variable-size spatial graphs. Achieved top-1 performance on 17/18 reasoning tasks from Mol-Instruction, RNA-QA, and DNA-Chat benchmarks.

</div>
</div>

<!-- Start the frist paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='images/archs/iclr_main.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can LLMs understand 2D/3D structure, e.g., molecules?**

[Entropy-Guided Dynamic Tokens for Graph-LLM Alignment in Molecular Understanding](https://arxiv.org/pdf/2602.02742) [**[Code]**](https://github.com/zihao-jing/DQ-Former) [**[Video]**](https://www.loom.com/share/0f624c26551b4273b33371358c3164d3) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Qiuhao Zeng, Ruiyi Fang, Yan Sun, Boyu Wang, Pingzhao Hu

**Challenges:** Current approach (1) compress graph into fixed-length tokens ([Q-Former style](https://arxiv.org/abs/2301.12597)), discarding fine-grained context for larger entities; (2) depend on heavy end-to-end tuning.

**Our solutions:** (1) Entropy-Guided Patching allocates dynamic tokens for informative regions based on entropy, preserving salient relations while avoiding over-compression, (2) enabling connector-only alignment training. SOTA on 9/10 molecular tasks and 7/7 Mol-Instruction benchmarks.

</div>
</div>

<!-- Second paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/archs/nips_Main_structure_vn_.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**? How can foundation transformers better embed 1D–3D structures?**

[Structure-Aware Fusion with Progressive Injection for Multimodal Molecular Representation Learning](https://neurips.cc/virtual/2025/loc/san-diego/poster/119127) [**[Code]**](https://github.com/zihao-jing/MuMo) [**[Video&Poster]**](https://neurips.cc/virtual/2025/loc/san-diego/poster/119127) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Yan Sun, Yan Yi Li, Sugitha Janarthanan, Alana Deng, Pingzhao Hu

**Challenges:** Molecular modeling suffers from (1) the same entity can yield inconsistent 3D inputs, destabilizing representations; (2) naive fusion: early, symmetric mixing lets noisy 3D dominate (modality collapse).

**Our solutions:** (1) Structured Fusion Pipeline aligns 2D/3D into a stable prior, reducing 3D sensitivity. (2) Progressive Injection asymmetrically injects this prior into the main stream, preventing fusion collapse.
</div>
</div>



🎓  Additional Work and Co-authored Publications

- Junqin Huang, Zhongjie Hu, **Zihao Jing**, Mengya Gao, Yichao Wu. *Piccolo2: General Text Embedding with Multi-Task Hybrid Loss Training.* **SenseTime Technical Report, 2024**.

- **Zihao Jing**, Yuxi Long, Ganlin Feng. *Pruning for Generalization: A Transfer-Oriented Spatiotemporal Graph Framework.* **Preprint**.

- Qiuhao Zeng, Jerry Huang, Peng Lu, Ruiyi Fang, Gezheng Xu, **Zihao Jing**, Yufei Cui, Charles Ling, Gang Niu, Boyu Wang. *Attention with Routed-Memory for Learnable Sparse Control.* **ICML 2026**.

- Ruiyi Fang, Jingyu Zhao, Shuo Wang, Ruizhi Pu, Bingheng Li, Jiale Cai, Zhihao Li, **Zihao Jing**, Jian Zhu, Song Tang, et al. *SAGA: Structural Aggregation Guided Alignment with Dynamic View and Neighborhood Order Selection for Multiview Graph Domain Adaptation.* **ICLR 2026**.

- Alana Deng, Sugitha Janarthanan, Yan Sun, **Zihao Jing**, Pingzhao Hu. *Distilling and Adapting: A Topology-Aware Framework for Zero-Shot Interaction Prediction in Multiplex Biological Networks.* **ICLR 2026**.

*For a complete list of publications, see my [Google Scholar]({{ site.author.googlescholar }}).*


# 📄 Research Funding and Grant Contributions

<div class="proposals-grid" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin: 1.5rem 0;">
  <div class="proposal-block" style="text-align: center; max-width: 320px;">
    <a href="/pdfs/ZIhao_Nvidia_Grant_Proposal.pdf">
      <img src="images/proposals/nvidia_grant.png" alt="Nvidia Academic Grant" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Nvidia Academic Grant Program 2025</p>
    </a>
  </div>
  <div class="proposal-block" style="text-align: center; max-width: 320px;">
    <a href="/pdfs/2026_RRG_V3.2.pdf">
      <img src="images/proposals/rrg_grant.png" alt="Alliance RRG Resource Grant" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Alliance (Computing Canada) RRG Grant</p>
    </a>
  </div>
</div>

Received 25 RGU-years (Reference GPU Unit-Years, **equivalent to 5×A100-80GB GPU-years**) on Canada's national supercomputing cluster for our lab via the **Digital Research Alliance of Canada, Resources for Research Groups 2026** grant; estimated commercial rental value: ~US$80K.

# 📖 Education
- *2024.09 - 2026.04*, MSc of Computer Science, Western University. London, Canada.
- *2019.09 - 2024.06*, Bachelor of Software Engineering, Beihang University. Beijing, China.

# 💻 Internships

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SenseTime</div><img src='images/company/sensetime.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**SenseTime - LLM Research Intern** \| 2023.09--2024.06

- **Text embeddings ([Piccolo2](https://arxiv.org/abs/2405.06932)):** Trained general-purpose embedding models with multi-task hybrid-loss objectives; built end-to-end training/evaluation pipelines and led iterative optimization of a generative embedding LLM; achieved top-1 ranking on C-MTEB (May 2024).
- **Domain LLM adaptation (100B):** Fine-tuned a 100B-parameter LLM for vertical livestream marketing; drove data/recipe iteration and productionized the model for deployment at Sina Weibo.
- **LLM research, engineering & scaling:** Gained hands-on experience with large-scale pretraining/fine-tuning codebases (SenseNova series), hyperparameter tuning, experiment tracking, and reproducible training workflows on multi-GPU infrastructure.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Jina AI</div><img src='images/company/jina.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Jina AI - AI Research Intern** \| 2023.04--2023.09

- **LLM engineering:** Improved RunGPT interface and contributed solutions to the **Llama** open-source ecosystem.
- **Applied LLM:** Implemented LLM-based denoising and sentiment pipeline for Budweiser public-opinion analysis; reduced operational cost by >13%.
- **Model commercialization:** Led evaluation/tuning of a super-resolution model; executed performance testing and produced pricing recommendations.


</div>
</div>


# 🎤 Selected Talks

<div class="talks-grid" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin: 1.5rem 0;">
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/105Dl92sWjmfIBvktO7sYI4vSJDk_UJZfV4EJErDOlPU/edit?usp=sharing">
      <img src="images/talks/DemystifyingLLMs.png" alt="Demystifying Large Language Models" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Demystifying LLMs, From Pretraining to Adaptation, UWORCS 2025</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/1STRbJ3gAZDHOUxICb0eFriS9So1DzE_k-u6HD-NNeq8/edit?usp=sharing">
      <img src="images/talks/Advanced_Attention_Mechanism.png" alt="Advanced Attention Mechanism in Transformers" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Advanced Attention Mechanism, UWO Seminar</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/1Ij5JzdSlkDElzGu_GH8X0KpTUmdcE581DAh5F3xsZ7o/edit?usp=sharing">
      <img src="images/talks/Deepseek.png" alt="Deepseek vs. ChatGPT" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">DeepSeek-Advanced Reinforcement Learning Approaches, UWO Seminar</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/15MNJCwaaM1xNMckSdDilzoPtEAUjXHZDLlRBIzPqN1I/edit?usp=sharing">
      <img src="images/talks/Alphafold.png" alt="AlphaFolds and All-Atom Foundation Models" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">AlphaFold and All-Atom Foundation Models, UWO BioSeminar</p>
    </a>
  </div>
</div>


# 👁 Academic Service

**Conference Reviewer**  ICLR 2026 (5 papers), ICML 2026 (6 papers)

**Workshop Reviewer**  Time Series in the Age of Large Models (TSALM), ICLR 2026 (2 papers)

**Journal Reviewer**  ACM Transactions on Knowledge Discovery from Data (TKDD)

**Journal Reviewer**  IEEE Transactions on Neural Networks and Learning Systems (TNNLS)

**Conference Volunteer**  NeurIPS 2025, San Diego Convention Center

# 🧑‍🏫 Mentorship

**Teaching Assistant**, COMPSCI 2211 Software Tools and Systems Programming &nbsp;\| Fall 2024 and Fall 2025

**Teaching Assistant**, COMPSCI 3305 Operating Systems &nbsp;\| Winter 2025 and Winter 2026

Mentored junior students on operating systems, software tools, Linux workflows, and research coding practices.

# 📈 Technical Skills

- **LLMs:** pretraining, post-training, multimodal alignment, and agent workflow design.
- **Systems and HPC:** Linux, Slurm, Docker, Singularity, Conda/Mamba, Git, and reproducible environments.
- **Distributed Training:** PyTorch DDP/FSDP, DeepSpeed, multi-GPU/node training, profiling, and monitoring.
- **Programming:** Python, C/C++, Java, MATLAB, SQL, Bash, JavaScript, and full-stack development.

# 🎖 Honors and Awards
- *2023* Silver Prize of Feng Ru Cup Science and Innovation Competition (University-level).
- *2021* Third Prize, 13th National Undergraduate Mathematics Competition (National-level).
- *2021* Third Prize, 32nd Beijing Undergraduate Mathematics Competition (Province-level).
- *2021* Outstanding Student Leader Award (University-Level).
- *2021* Third Prize in Physics Academic Competition (University-Level).
- *2020* H Prize in the Mathematical Contest In Modeling.

<!-- # 🚀 Career Goals

My long-term career trajectory is centered on advancing LLM research at the highest level. 

In the near term, I am actively pursuing **Ph.D. opportunities at top-tier institutions** such as the University of Toronto. 

Following the Ph.D., I aim to pursue a **postdoctoral fellowship at elite research universities** such as Stanford University. 

My ultimate goal is to serve as an **AI Scientist at leading AI organizations** — including OpenAI, Google DeepMind, and Meta AI — where I can drive frontier research on large language models and push the boundaries of AI capabilities. -->

<!-- # 🎯 Leadership

**Class Representative (Middle School–Undergraduate):** Organized 100+ activities and events. Most notably, organized a large-scale university event in the main auditorium and served as host, conducting an on-stage interview with [Xiaoqian Wang](https://baike.baidu.com/item/%E7%8E%8B%E5%B0%8F%E9%AA%9E/1377633) from CCTV. Received both department- and university-level Outstanding Student Leader Awards.

**Master's Program:** Organized 5+ seminars. Highly willing and confident in leading events such as workshops. -->

# 👨‍🏫 Research Values from My Mentors

- [Prof. Pingzhao Hu](https://scholar.google.ca/citations?user=ejiSuoYAAAAJ&hl=en&oi=ao), Western University: &nbsp; *"Write a paper such that reviewers neither can nor need to ask questions."*
- [Prof. Boyu Wang](https://scholar.google.ca/citations?user=qAZM5KcAAAAJ&hl=en&oi=ao), Western University: &nbsp; *"Read 20+ related papers before discussing ideas with me."*
- [Yifu Ding](https://scholar.google.ca/citations?user=RCEI1r0AAAAJ&hl=en&oi=ao), PhD in CS, Beihang University: &nbsp; *"A paper should present clear, well-aligned challenges and novelties."*
- [Qiuhao Zeng](https://scholar.google.ca/citations?user=MJdcPlgAAAAJ&hl=en&oi=ao), Postdoc in CS, University of Toronto: &nbsp; *"If you dig one direction deeper, you will always uncover novelty."*

<!-- # 🛂 Immigration Status

I am originally from China and have been residing in **London, Ontario, Canada** for approximately **1.5 years** on a Canadian study permit. 

My background check has been successfully completed. I am confident that subsequent permits will be obtained without issue or delay, and this should not be a concern for prospective supervisors or collaborators. -->