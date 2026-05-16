---
permalink: /plain/
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

My research interests lie in **LLM Post-Training**, **Multimodal Reasoning**, **World Models**，and **Agents**. [[See My CV Here]](https://zihao-jing.org/CV.pdf)

<!-- # 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Selected Publications
🎓 Top-Tier Conferences During My Master's

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2026</div><img src='/images/archs/on_going.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Can LLMs Reason Over Complex Structures Without Wasting Tokens?**

[Scaling-Aware Adapter for Structure-Grounded LLM Reasoning](https://arxiv.org/pdf/2602.02780) [**[Code]**](https://github.com/zihao-jing/EntroAdap) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Qiuhao Zeng, Ruiyi Fang, Yan Yi Li, Yan Sun, Boyu Wang, Pingzhao Hu

Designed an entropy-guided smart adapter that focuses on the instruction-related parts of 3D entities, solving the longstanding gap of LLMs treating all positions as equally important. Achieves top-1 on 17 out of 18 biology QA benchmarks, making LLM-assisted structural research an operational reality.

</div>
</div>

<!-- Start the frist paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2026</div><img src='/images/archs/iclr_main.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**How Can LLMs Align With Structures Without Fixed-Size Bottlenecks?**

[Entropy-Guided Dynamic Tokens for Graph-LLM Alignment in Molecular Understanding](https://arxiv.org/pdf/2602.02742) [**[Code]**](https://github.com/zihao-jing/DQ-Former) [**[Video]**](https://www.loom.com/share/0f624c26551b4273b33371358c3164d3) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Qiuhao Zeng, Ruiyi Fang, Yan Sun, Boyu Wang, Pingzhao Hu

A dynamic connector that scales representation slots based on complexity, bridging the gap of fixed-size connectors that lose structural detail for large entities. The model ranks #1 on 20 of 21 understanding tasks and trains 3.5× faster under equivalent settings, directly advancing AI-driven drug design.

</div>
</div>

<!-- Second paper -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='/images/archs/nips_Main_structure_vn_.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Can Foundation Models Learn Reliable Representations from Noisy Structures?**

[Structure-Aware Fusion with Progressive Injection for Multimodal Molecular Representation Learning](https://neurips.cc/virtual/2025/loc/san-diego/poster/119127) [**[Code]**](https://github.com/zihao-jing/MuMo) [**[Video&Poster]**](https://neurips.cc/virtual/2025/loc/san-diego/poster/119127) <strong><span class='show_paper_citations' data='EXAMPLE_CITATION_ID'></span></strong>

**Zihao Jing**, Yan Sun, Yan Yi Li, Sugitha Janarthanan, Alana Deng, Pingzhao Hu

Built a multimodal encoder that first stabilizes noisy 3D shape data into a reliable prior, solving the longstanding instability in multimodal embeddings that incorporate 3D geometry. Ranks #1 on 22/29 molecular property benchmarks with up to 27% better accuracy, and was applied to a pipeline for finding Pin1 inhibitors in cancer treatment.
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
      <img src="/images/proposals/nvidia_grant.png" alt="Nvidia Academic Grant" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Nvidia Academic Grant Program 2025</p>
    </a>
  </div>
  <div class="proposal-block" style="text-align: center; max-width: 320px;">
    <a href="/pdfs/2026_RRG_V3.2.pdf">
      <img src="/images/proposals/rrg_grant.png" alt="Alliance RRG Resource Grant" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Alliance (Computing Canada) RRG Grant</p>
    </a>
  </div>
</div>

Received 25 RGU-years (Reference GPU Unit-Years, **equivalent to 5×A100-80GB GPU-years**) on Canada's national supercomputing cluster for our lab via the **Digital Research Alliance of Canada, Resources for Research Groups 2026** grant; estimated commercial rental value: ~US$80K.

# 📖 Education
- *2024.09 - 2026.06*, MSc of Computer Science, [Western University](https://www.csd.uwo.ca/). London, Canada. Supervised by [Prof. Pingzhao Hu](https://phulab.org/).
- *2019.09 - 2024.06*, BEng, Software Engineering, [Beihang University](https://www.buaa.edu.cn/). Beijing, China. Graduated with Honors.

# 💻 Internships

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SenseTime</div><img src='/images/company/sensetime.jpeg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**SenseTime - LLM Research Intern** \| 2023.09--2024.06

- Developed Piccolo-GPT, a dual-function LLM supporting both text embedding and generation within a single architecture.
- Trained general-purpose text embedding models ([Piccolo2](https://arxiv.org/abs/2405.06932)); top-1 on C-MTEB (May 2024).
- Fine-tuned a ~100B LLM for vertical livestream marketing for Sina Weibo.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Jina AI</div><img src='/images/company/jina.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Jina AI - AI Research Intern** \| 2023.04--2023.09

- Implemented LLM-based denoising and sentiment analysis pipeline for Budweiser; reduced cost >13%.
- Led evaluation and deploying of super-resolution models for commercialization.
- Contributed to RunGPT of LlamaIndex with our super-resolution pipeline.


</div>
</div>


# 🎤 Selected Talks

<div class="talks-grid" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin: 1.5rem 0;">
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/105Dl92sWjmfIBvktO7sYI4vSJDk_UJZfV4EJErDOlPU/edit?usp=sharing">
      <img src="/images/talks/DemystifyingLLMs.png" alt="Demystifying Large Language Models" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Demystifying LLMs, From Pretraining to Adaptation, UWORCS 2025</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/1STRbJ3gAZDHOUxICb0eFriS9So1DzE_k-u6HD-NNeq8/edit?usp=sharing">
      <img src="/images/talks/Advanced_Attention_Mechanism.png" alt="Advanced Attention Mechanism in Transformers" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">Advanced Attention Mechanism, UWO Seminar</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/1Ij5JzdSlkDElzGu_GH8X0KpTUmdcE581DAh5F3xsZ7o/edit?usp=sharing">
      <img src="/images/talks/Deepseek.png" alt="Deepseek vs. ChatGPT" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">DeepSeek-Advanced Reinforcement Learning Approaches, UWO Seminar</p>
    </a>
  </div>
  <div class="talk-block" style="text-align: center; max-width: 320px;">
    <a href="https://docs.google.com/presentation/d/15MNJCwaaM1xNMckSdDilzoPtEAUjXHZDLlRBIzPqN1I/edit?usp=sharing">
      <img src="/images/talks/Alphafold.png" alt="AlphaFolds and All-Atom Foundation Models" width="100%" style="display: block; border-radius: 6px;">
      <p style="margin-top: 0.75rem; font-weight: 600;">AlphaFold and All-Atom Foundation Models, UWO BioSeminar</p>
    </a>
  </div>
</div>


# 👁 Academic Service

**Conference Reviewer**  ICML 2026 (6 papers) 🏅 Gold Reviewer Award

**Conference Reviewer**  ICLR 2026 (5 papers)

**Conference Reviewer**  NeurIPS 2026

**Workshop Reviewer**  TSALM @ ICLR 2026; AI4GOOD, FMSD, GFM @ ICML 2026

**Journal Reviewer**  ACM Transactions on Knowledge Discovery from Data (TKDD)

**Journal Reviewer**  IEEE Transactions on Neural Networks and Learning Systems (TNNLS)

**Conference Volunteer**  NeurIPS 2025, San Diego

# 🧑‍🏫 Mentorship

**Teaching Assistant**, COMPSCI 2211 Software Tools and Systems Programming &nbsp;\| Fall 2024 and Fall 2025

**Teaching Assistant**, COMPSCI 3305 Operating Systems &nbsp;\| Winter 2025 and Winter 2026

Mentored junior students on operating systems, software tools, Linux workflows, and research coding practices.

# 📈 Technical Skills

- **Research:** LLM Post-Training, Pre-Training / Fine-Tuning, Multimodal Alignment.
- **Systems & Programming:** Linux, Slurm, Docker, HPC Workflows, Python, C/C++, Java, SQL.
- **ML Engineering:** PyTorch, Transformers (HuggingFace), DeepSpeed, DDP/FSDP, Multi-GPU/Multi-Node Training.

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